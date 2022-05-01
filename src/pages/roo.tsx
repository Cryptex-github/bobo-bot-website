import { useEffect, useState } from "react";
import Image from "next/image";

import styled from 'styled-components';

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

const RooImage = styled(Image)`
    margin: 3px;
`

export default function Roo() {
    const [roos, setRoos] = useState<Array<string> | null>();

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch("https://raw.githubusercontent.com/Roo-Foundation/roo/main/roos.txt");

            if (!resp.ok) {
                setRoos(null);
                return;
            }

            setRoos(((await resp.text()).split('\n')).filter(r => r));
        };

        fetchData();
    }, []);

    return (
        <>
            <Title>
                <span>Roos</span>
            </Title>
            <Roos>
                {
                    roos ?
                        roos.map(roo => (
                            <RooItem key={roo}>
                                <a href={'https://cdn.bobobot.cf/uploads/roos/' + roo}>
                                    <RooImage src={'https://cdn.bobobot.cf/uploads/roos/' + roo} alt={roo.toString()} width='120' height='120' />
                                </a>
                            </RooItem>
                        ))
                        :
                        <span>N/A</span>
                }
            </Roos>
        </>
    )
}
