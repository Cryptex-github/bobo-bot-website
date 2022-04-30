import styled from 'styled-components';

const Title = styled.h1`
    font-size: 100px;
    font-weight: bold;
    margin: auto;
    display: table;
    background-image: linear-gradient(20deg, #27afca, #032eff);
    filter: drop-shadow(0 20px 30px #28d8ff33);
    background-clip: text;
    box-decoration-break: clone;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-box-decoration-break: clone;

`

const Text = styled.h2`
    font-size: 20px;
    margin: auto;
    display: table;
`

export default function NotFound() {
    return (
        <>
            <Title>404</Title>
            <Text>Page not found</Text>
        </>
    )
}
