import { useEffect, useState } from "react";
import styled from 'styled-components';

import Header from "../components/Header";
import Footer from "../components/Footer";

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-weight: bold;
    font-size: 30px;
`

const Roos = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1vw;
`

const RooItem = styled.div`
    margin: 3px;
`

const RooImage = styled.img`
    margin: 3px;
`

export default function Roo() {
    const [roos, setRoos] = useState<Array<String> | null>();

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch("https://raw.githubusercontent.com/Roo-Foundation/roo/main/roos.txt");

            if (!resp.ok) {
                setRoos(null);
                return;
            }

            setRoos((await resp.text()).split('\n'));
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />

            <Title>
                <span>Roos</span>
            </Title>

            <Roos>
                {
                    roos ? 
                        roos.map(roo => (
                            <RooItem>
                                <a href={'https://cdn.bobobot.cf/uploads/roos/' + roo}>
                                    <RooImage src={'https://cdn.bobobot.cf/uploads/roos/' + roo} alt={roo.toString()} />
                                </a>
                            </RooItem>
                        ))
                    :
                        <span>N/A</span>
                }
            </Roos>

            <Footer />
        </>
    )
}
