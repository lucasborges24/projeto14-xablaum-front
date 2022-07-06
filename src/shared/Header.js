import styled from "styled-components"
import { Link } from "react-router-dom"


function Header({
    userToken
}) {

    console.log(userToken)

    function createIconLogin() {
        if (!userToken) {
            return (
                <IconLogout to='/login'>
                    <ion-icon name="log-out"></ion-icon>
                </IconLogout>
            )
        } else {
            return (
                <IconLogin>
                    <ion-icon name="person-circle"></ion-icon>
                    <H2>Faça seu <Link to='/login'>Login</Link> ou crie seu <Link to='/cadastro'>Cadastro</Link> </H2>
                </IconLogin>
            )
        }
    }

    return (
        <HeaderStyle>
            <Head>
                <H1>
                    <Link to='/'>XaBlauM!</Link>
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
    position: fixed;
    left: 0; top: 0;
    width: 100%;
    height: 112px;
    background-color: #0060b1;
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
`

const H1 = styled.h1` 
    font-family: 'Mansalva', cursive;
    color: #0a437a;
    background-color: rgba(255,255,255,0.7);
    font-size: 36px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;

    a {
        text-decoration: none;
        color: #0a437a;
    }

`

const HeadRight = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
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
`

const IconCart = styled(Link)` 
    margin-right: 35px;
    cursor: pointer;

    ion-icon {
        font-size: 27px;
        color: #c4c4c4;
    }
`

const IconLogout = styled(Link)` 
    cursor: pointer;

    ion-icon {
        font-size: 27px;
        color: #c4c4c4;
    }
`

export default Header