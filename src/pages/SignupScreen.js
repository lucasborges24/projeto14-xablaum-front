import { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import axios from "axios";

import { Input } from "../shared/Input";
import { ButtonWhite } from "../shared/Button";
import UserContext from "../contexts/UserContext";

function Cadastro() {
  const { URL } = useContext(UserContext);
  const navigate = useNavigate();
  const [cadastroData, setCadastroData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [enableButton, setEnableButton] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (!enableButton) return;

    setEnableButton(false);
    const dataCadastro = {
      name: cadastroData.name,
      email: cadastroData.email,
      password: cadastroData.password,
      confirmPassword: cadastroData.confirmPassword
    };
    console.log(dataCadastro)
    const response = axios.post(`${URL}/sign-up`, dataCadastro);

    response
      .then(() => navigate("/login"))
      .catch((err) => {
        alert(
          `Ocorreu o erro: ${err.response.data}. Por favor, tente novamente`
        );
        console.log(err.response.data)
        setEnableButton(true);
      });
  }

  return (
    <>
      <Title>
        <ion-icon name="person"></ion-icon>
        <p>identificação</p>
      </Title>
      <Text>
        <p>Quero me cadastrar</p>
      </Text>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Jacinto Pena Galinha"
          value={cadastroData.name}
          functionOnChange={(e) =>
            setCadastroData({ ...cadastroData, name: e.target.value })
          }
          id="name"
          autocomplete="off"
          pattern="^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$"
          errorMessage={<p>Por favor, digite um nome válido</p>}
        >
          Nome
        </Input>
        <Input
          type="email"
          placeholder="jaimecinto_bunito@gmail.com"
          value={cadastroData.email}
          functionOnChange={(e) =>
            setCadastroData({ ...cadastroData, email: e.target.value })
          }
          id="email"
          autocomplete="off"
          pattern="^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
          errorMessage={<p>Por favor, digite um email válido</p>}
        >
          Email
        </Input>
        <Input
          type="password"
          placeholder="Senh4_Fort3"
          value={cadastroData.password}
          functionOnChange={(e) =>
            setCadastroData({ ...cadastroData, password: e.target.value })
          }
          id="senha"
          autocomplete="off"
          pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&amp;*-]).{8,20}$"
          errorMessage={
            <p>
              Digite uma senha com 8 a 20 digitos com letras minúsculas,
              maiúsculas, números e caracter especial
            </p>
          }
        >
          Senha
        </Input>
        <Input
          type="password"
          placeholder=""
          value={cadastroData.confirmPassword}
          functionOnChange={(e) =>
            setCadastroData({
              ...cadastroData,
              confirmPassword: e.target.value,
            })
          }
          id="confirm-senha"
          autocomplete="off"
          pattern={cadastroData.password}
          errorMessage={<p>Senhas Diferentes</p>}
        >
          Confirme sua senha
        </Input>
        <ButtonWhite width="472px">
          {enableButton ? (
            <>
              <ion-icon name="newspaper-outline"></ion-icon>
              <p> Cadastrar </p>
            </>
          ) : (
            <Oval
              ariaLabel="loading-indicator"
              height={37}
              width={37}
              strokeWidth={8}
              color="rgb(255,101,0)"
              secondaryColor="#f05331"
            />
          )}
        </ButtonWhite>
      </Form>
      <GoToSignIn>
        <Link to="/login">Já se cadastrou? Faça login!</Link>
      </GoToSignIn>
    </>
  );
}

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 32px 0 0 20px;

  ion-icon {
    font-size: 25px;
    color: rgb(255, 101, 0);
  }

  p {
    font-size: 24px;
    line-height: 32px;
    font-weight: 800;
    color: rgb(66, 70, 77);
    text-transform: uppercase;
    padding-left: 5px;
  }

  @media (max-width: 614px) {
    padding: 20px 15px 0 15px;
    font-size: 15px;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px auto 20px auto;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: rgb(255, 101, 0);
  font-size: 24px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 15px;

  button {
    margin: 20px 0;
  }
`;

const GoToSignIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  text-decoration: none;
  color: rgb(255, 101, 0);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  width: auto;
  padding: 0 15px;

  a {
    text-decoration: none;
    color: inherit;
    margin-bottom: 20px;
  }

  a:hover {
    text-decoration: underline;
  }

  a:focus {
    outline: currentColor;
  }
`;

export default Cadastro;
