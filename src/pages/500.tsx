import styled from 'styled-components';

const Title = styled.h1`
    font-size: 100px;
    font-weight: bold;
    margin: auto;
    display: table;
    background-image: linear-gradient(20deg, #8500ff, #ff8100);
    filter: drop-shadow(0 20px 30px #28d8ff33);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    box-decoration-break: clone;
`

const Text = styled.h2`
    font-size: 20px;
    margin: auto;
    display: table;
`

export default function InternalError() {
    return (
        <>
            <Title>5xx</Title>
            <Text>An internal server error has occured.</Text>
        </>
    )
}
