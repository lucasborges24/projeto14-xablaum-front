import { useState } from "react"
import { Input } from "../shared/Input"

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
        </>
    )
}

export default Login