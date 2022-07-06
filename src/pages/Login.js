import { useState } from "react"

import { Input } from "../shared/Input"
import { ButtonWhite, ButtonOrange } from "../shared/Button"

function Login() {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    return (
        <>
            <Input
                type="email"
                placeholder=""
                value={loginData.email}
                functionOnChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                id='email'
                autocomplete="off"
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
            <ButtonWhite>
                <ion-icon name="log-in-outline"></ion-icon>
                <p> Entrar </p> 
            </ButtonWhite>
            <ButtonOrange width='472px'>
                <ion-icon name="log-in-outline"></ion-icon>
                <p> Entrar </p> 
            </ButtonOrange>
        </>
    )
}

export default Login