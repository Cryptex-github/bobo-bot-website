import { ReactElement } from 'react';
import useSWR from 'swr';
import Head from 'next/head';
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

const fetcher = (...args: [any]) => fetch(...args).then(res => res.json());

function getStats(resp: any): ReactElement | Array<ReactElement> {
    const { data, error } = resp;
    let status_text: string = '';

    if (error) {
        status_text = 'Failed to fetch stats';
    }

    if (!data) {
        status_text = 'Fetching stats, please wait.';
    }

    if (status_text !== '') {
        return (
            <>
                <Centered>
                    <p>{status_text}</p>
                </Centered>
            </>
        )
    }

    const stats: Array<ReactElement> = [];

    Object.keys(data).forEach((key) => {
        const label = key;
        const value = data[key];

        stats.push(
            <StatBox key={label}>
                <StatTitle>{label}</StatTitle>
                <br />
                <br />
                <StatValue>{value}</StatValue>
            </StatBox> 
        );

    });

    return (
        <>
            <Centered>
                <p>This page auto updates every 15 seconds.</p>
            </Centered>

            <StatContainer>
                {stats}
            </StatContainer>
        </>
    )
}

export default function Stats() {
    return (
        <>
            {getStats(useSWR('https://api.bobobot.cf/stats', fetcher, { refreshInterval: 15000 }))}
        </>
    )
}
