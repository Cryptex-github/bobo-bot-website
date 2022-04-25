import React, { useState, useEffect, ReactElement } from 'react'
import styled from 'styled-components';

import Header from '../components/Header'
import Footer from '../components/Footer'

type StatsData = {
    Servers: number,
    Users: number,
    Channels: number,
    Commands: number,
    'Total Command Uses': number,
    'Most Used Command': string,
    'Postgres Latency': string,
    'Redis Latency': string,
    'Discord REST Latency': string,
    'Discord WebSocket Latency': string,
    'Total Gateway Events': number,
    'Average Events per minute': number
}

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


export default function Stats() {
    const [stats, setStats] = useState<Array<StatsArray> | null>();

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch('https://api.bobobot.cf/stats');

            if (!resp.ok) {
                setStats(null);
                return;
            }

            const stats_json = await resp.json();
            
            const arr: Array<StatsArray> = [];

            Object.keys(stats_json).forEach((key) => {
                arr.push({'label': key, 'value': stats_json[key]});
            });

            setStats(arr);
        };

        fetchData();
    }, []);

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
            <Header />

            <StatContainer>
                {renderStats()}
            </StatContainer>

            <Footer />
        </>
    )
}
