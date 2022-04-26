import styled from 'styled-components';
import Image from 'next/image'

const AUTH_URL = 'https://discord.com/api/oauth2/authorize?client_id=808485782067216434&redirect_uri=https%3A%2F%2Fbobobot.cf&response_type=code&scope=identify%20guilds';

const TitleBar = styled.div`
    background-color: #030618;
    display: flex;
`;

const TitleBlock = styled.a`
    display: block;
    width: 20vw;
    text-decoration: none;
`;

const TitleIcon = styled.div`
    display: flex;
    align-items: center;
`;

const TitleImage = styled(Image)`
    border-radius: 50px;
    margin: 13px;
    font-size: 40px;
    size: 40px;
`;

const TitleText = styled.h1`
    margin: 13px;
    font-size: 40px;
    size: 40px;
`;

const NavigationBarFirstItem = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-left: 50vw;
    padding-top: 3.3vw;
    padding-bottom: 8px;
    font-size: 23px;
`;

const NavigationBarItem = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-left: 1vw;
    padding-top: 3.3vw;
    padding-bottom: 8px;
    font-size: 23px;
`;

const NavigationBarItemLink = styled.a`
    text-decoration: none;
`;

const NavigationBarItemText = styled.span`
    display: inline-block;
    position: relative;
    color: #FFFFFF;

    :after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #FFFFFF;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    :hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;

export default function Header() {
    return (
        <TitleBar>
            <TitleBlock href='.'>
                <TitleIcon>
                    <TitleImage src='/icon.png' alt="icon" width='112px' height='112px' priority />
                    <TitleText>Bobo Bot</TitleText>
                </TitleIcon>
            </TitleBlock>

            <NavigationBarFirstItem>
                <NavigationBarItemLink href='stats'>
                    <NavigationBarItemText>Statistics</NavigationBarItemText>
                </NavigationBarItemLink>
            </NavigationBarFirstItem>

            <NavigationBarItem>
                <NavigationBarItemLink href='roo'>
                    <NavigationBarItemText>Roo</NavigationBarItemText>
                </NavigationBarItemLink>
            </NavigationBarItem>
        </TitleBar>
    )
}
