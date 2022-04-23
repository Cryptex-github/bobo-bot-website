import Typed from 'react-typed';
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';


const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-weight: bold;
    font-size: 30px;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Link = styled.a`
    text-decoration: none;
`

const InviteButton = styled.button`
    border-radius: 8px;
    display: inline-block;
    transition: all, 0.5s;
    cursor: pointer;
    text-align: center;
    border: 0;
    margin: 10px;
    font-size: 18px;
    background-color: #7289DA;
    padding: 20px;
    width: 200px;
    margin-top: 3vw;

    :span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
    }

    :span:after {
        content: '\00bb';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
    }

    :hover span {
        padding-right: 25px;
    }

    :hover span:after {
        opacity: 1;
        right: 0;
    }
`

const SupportServerButton = styled.button`
    border-radius: 8px;
    display: inline-block;
    transition: all, 0.5s;
    cursor: pointer;
    text-align: center;
    border: 0;
    margin: 10px;
    font-size: 18px;
    background-color: #2C394B;
    padding: 20px;
    width: 200px;
    margin-top: 3vw;

    :span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
    }

    :span:after {
        content: '\00bb';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
    }

    :hover span {
        padding-right: 25px;
    }

    :hover span:after {
        opacity: 1;
        right: 0;
    }
`

export default function App() {
    return (
        <>
            <Header />
            <Title>
                <Typed strings={['Bobo Bot, The Anime Bot but better.', 'Did I mention but better?', 'Yes I did.', 'Bobo Bot, The Anime Bot but better.']} typeSpeed={40} backSpeed={60} />
            </Title>

            <ButtonContainer>
                <Link href="https://discord.com/api/oauth2/authorize?client_id=808485782067216434&permissions=448827607232&scope=bot%20applications.commands">
                    <InviteButton><span>Invite Bobo Bot</span></InviteButton>
                </Link>

                <Link href="https://discord.gg/AHYTRPr8hZ">
                    <SupportServerButton><span>Support Server</span></SupportServerButton>
                </Link>
            </ButtonContainer>

            <Footer />
        </>
    )
}
