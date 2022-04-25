import React, { ReactElement } from 'react';
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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const resp = await fetch('https://api.bobobot.cf/stats');

    if (!resp.ok) {
        return {
            props: { stats: null }
        }
    }

    const stats_json = await resp.json();
    
    const arr: Array<StatsArray> = [];

    Object.keys(stats_json).forEach((key) => {
        arr.push({'label': key, 'value': stats_json[key]});
    });

    return {
        props: { stats: arr }
    }
}


export default function Stats({ stats }: { stats: Array<StatsArray> | null }) {
    function renderStats(): ReactElement | Array<ReactElement> {
        if (!stats) {
            return <span>N/A</span>;
        }

        const arr: Array<ReactElement> = [];

        for (const item of stats) {
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

    return (
        <>
            <StatContainer>
                {renderStats()}
            </StatContainer>
        </>
    )
}
