import { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import { Input } from "../shared/Input"
import { ButtonWhite } from "../shared/Button"

function Cadastro() {

    const [cadastroData, setCadastroData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    return (
        <>
            <Title>
                <ion-icon name="person"></ion-icon>
                <p>identificação</p>
            </Title>
            <Text>
                <p>Quero me cadastrar</p>
            </Text>
            <Form>
                <Input
                    type="text"
                    placeholder="Jacinto Pena Galinha"
                    value={cadastroData.name}
                    functionOnChange={(e) => setCadastroData({ ...cadastroData, name: e.target.value })}
                    id='name'
                    autocomplete="off"
                >
                    Nome
                </Input>
                <Input
                    type="email"
                    placeholder="jaimecinto_bunito@gmail.com"
                    value={cadastroData.email}
                    functionOnChange={(e) => setCadastroData({ ...cadastroData, email: e.target.value })}
                    id='email'
                    autocomplete="off"
                >
                    Email
                </Input>
                <Input
                    type="password"
                    placeholder="senha_super_forte"
                    value={cadastroData.password}
                    functionOnChange={(e) => setCadastroData({ ...cadastroData, password: e.target.value })}
                    id='senha'
                    autocomplete="off"
                >
                    Senha
                </Input>
                <Input
                    type="password"
                    placeholder=""
                    value={cadastroData.confirmPassword}
                    functionOnChange={(e) => setCadastroData({ ...cadastroData, confirmPassword: e.target.value })}
                    id='confirm-senha'
                    autocomplete="off"
                >
                    Confirme sua senha
                </Input>
                <ButtonWhite width='472px'>
                    <ion-icon name="newspaper-outline"></ion-icon>
                    <p> Cadastrar </p>
                </ButtonWhite>
            </Form>
            <GoToSignIn>
                <Link to='/login'>Já se cadastrou? Faça login!</Link> 
            </GoToSignIn>
        </>
    )
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
`

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
`

const Form = styled.form` 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 15px;

    button {
        margin: 20px 0;
    } 
`

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
    }

    a:hover {
        text-decoration: underline;
    }   
`

export default Cadastro