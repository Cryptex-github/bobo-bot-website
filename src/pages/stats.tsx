import React, { ReactElement, useState } from 'react';
import { GetServerSideProps } from 'next';
import styled from 'styled-components';

interface StatsArray {
    label: string,
    value: number
}

const StatContainer = styled.div`
    display: flex;
    margin-top: 50px;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`

const StatBox = styled.div`
    background-color: #2C394B;
    border-radius: 8px;
    margin: 12px;
    padding: 12px;
    width: 250px;
    text-align: center;
    transition-duration: 0.4s;

    :hover {
        transform: scale(1.1);
    }
`

const StatTitle = styled.span`
    font-size: 20px;
    margin-top: 10px;
`

const StatValue = styled.span`
    font-size: 30px;
    margin-top: 10px;
`

const Centered = styled.div`
    text-align: center;
`

const UpdateButton = styled.button`
    background-color: #2C394B;
    border-radius: 8px;
    margin-top: 1vw;
    font-size: 30px;
    border: none;

    :hover {
        background-color: #213249;
        cursor: pointer;
    }
`

async function getStats(): Promise<StatsArray[] | null> {
    const resp = await fetch('https://api.bobobot.cf/stats');

    if (!resp.ok) {
        return null;
    }

    const stats_json = await resp.json();
    
    const arr: Array<StatsArray> = [];

    Object.keys(stats_json).forEach((key) => {
        arr.push({'label': key, 'value': stats_json[key]});
    });

    return arr;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const resp = await getStats();

    if (!resp) {
        return {
            props: { stats: null }
        }
    }

    return {
        props: { stats: resp }
    }
}


export default function Stats({ stats }: { stats: Array<StatsArray> | null }) {
    const [updatedStats, setStats] = useState<StatsArray[] | null>(stats);

    function renderStats(): ReactElement | Array<ReactElement> {
        if (!updatedStats) {
            return <span>N/A</span>;
        }

        const arr: Array<ReactElement> = [];

        for (const item of updatedStats) {
            arr.push(
                <StatBox>
                    <StatTitle>{item.label}</StatTitle>
                    <br />
                    <br />
                    <StatValue>{item.value}</StatValue>
                </StatBox> 
            );

        }

        return arr;
    }

    async function updateStats() {
        const resp = await getStats();

        if (!resp) {
            return;
        }

        setStats(resp);
    }

    return (
        <>
            <Centered>
                <UpdateButton onClick={updateStats}>&#128472; Refresh stats</UpdateButton>
            </Centered>

            <StatContainer>

                {renderStats()}
            </StatContainer>
        </>
    )
}
