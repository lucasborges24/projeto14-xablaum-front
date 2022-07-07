import { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import { Input } from "../shared/Input"
import { ButtonWhite } from "../shared/Button"

function Login() {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('a partir daq é só fazer a req')
    }

    return (
        <>
            <Title>
                <ion-icon name="person"></ion-icon>
                <p>identificação</p>
            </Title>
            <Text>
                <p>já tenho cadastro</p>
            </Text>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="jaimecinto_bunito@gmail.com"
                    value={loginData.email}
                    functionOnChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    id='email'
                    autocomplete=" autofocusoff"
                    pattern='^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
                    errorMessage={<p>Por favor, digite um email válido</p>}
                >
                    Email
                </Input>
                <Input
                    type="password"
                    placeholder=""
                    value={loginData.password}
                    functionOnChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    id='senha'
                    autocomplete="off"
                >
                    Senha
                </Input>
                <ButtonWhite width='472px'>
                    <ion-icon name="log-in-outline"></ion-icon>
                    <p> Entrar </p>
                </ButtonWhite>
            </Form>
            <GoToSignUp>
                <Link to='/cadastro'>Não tem login? Cadastre-se agora!</Link> 
            </GoToSignUp>
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
    font-size: 2l4px;
`

const Form = styled.form` 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 15px;
    /* height: 100%; */

    button {
        margin: 20px 0;
    } 
`

const GoToSignUp = styled.div` 
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

    a:focus {
        outline: currentColor;
    }
`

export default Login