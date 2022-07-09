import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"



function Header() {

    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem("loginDataStoraged")
        navigate("/login")
    }

    function createIconLogin() {
        if (JSON.parse(localStorage.getItem("loginDataStoraged"))) {
            return (
                <IconLogout onClick={logout}>
                    <ion-icon name="log-out"></ion-icon>
                </IconLogout>
            )
        } else {
            return (
                <IconLogin>
                    <Link to='/login'><ion-icon name="person-circle"></ion-icon></Link>
                    <H2>Faça seu <Link to='/login'>Login</Link> ou crie seu <Link to='/cadastro'>Cadastro</Link> </H2>
                </IconLogin>
            )
        }
    }

    return (
        <HeaderStyle>
            <Head>
                <H1>
                    <Link to='/'>XaBlauM!<span> &#62;&#62;</span></Link>
                    
                </H1>
                <HeadRight>
                    <IconCart to='/cart'>
                        <ion-icon name="cart"></ion-icon>
                    </IconCart>
                    {
                        createIconLogin()
                    }
                </HeadRight>
            </Head>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    /* position: fixed;
    left: 0; top: 0; */
    width: 100%;
    height: 112px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    background-color: #0060b1;

    @media (max-width:  935px) {
        height: auto;
        padding: 10px 0;
    }
`

const Head = styled.div`
    max-width: 1216px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width:  935px) {
        padding: 0 10px;
    }
`

const H1 = styled.h1` 
    font-family: 'Mansalva', cursive;
    color: #ffffff;
    /* background-color: rgba(255,255,255,1); */
    font-size: 45px;
    font-weight: bold;
    border-radius: 20%;
    /* border: 2px solid #ffffff; */
    cursor: pointer;
    filter: saturate(15);
    box-shadow: rgba(0, 0,0, 0.55) 0px 5px 15px;

    span {
        font-size: 25px;
        color: #f05331;
    }

    a {
        text-decoration: none;
        color: #ffffff;
    }

    @media (max-width:  935px) {
        font-size: 28px;
        margin-right: 15px;

        span {
            font-size: 20px;
        }
    }
`

const HeadRight = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width:  935px) {
        width: 30%
    }
    @media (max-width:  624px) {
        width: 5rem;
    }
`

const IconLogin = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;

    ion-icon {
        font-size: 36px;
        color: #c4c4c4;
    }
`

const H2 = styled.h2`
    max-width: 126px;
    width: 100%;
    font-size: 12px;
    color: #ccdfef;

    a {
        line-height: 18px;
        font-weight: bold;
        color: #ccdfef;
        text-decoration: none;
        cursor: pointer;
        transition: 300ms ease;
    }

    a:hover {
        text-decoration: underline;
    }

    @media (max-width:  624px) {
        display: none;
    }
`

const IconCart = styled(Link)` 
    margin-right: 35px;
    cursor: pointer;

    ion-icon {
        font-size: 27px;
        color: #c4c4c4;
    }

    @media (max-width:  935px) {
        margin-right: 15px;
    }
`

const IconLogout = styled.div` 
    cursor: pointer;

    ion-icon {
        font-size: 27px;
        color: #c4c4c4;
    }
`

export default Header