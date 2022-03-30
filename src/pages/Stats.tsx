import React, { useState, useEffect, FC, ReactElement } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

type StatsData = {
    Servers: number,
    Users: number,
    Channels: number,
    Commands: number,
    'Total Command Uses': number,
    'Most Used Command': string,
    'Postgres Latency': number,
    'Redis Latency': number,
    'Discord REST Latency': number,
    'Discord WebSocket Latency': number,
}

interface StatsArray {
    label: string,
    value: number
}

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
                <div className='box'>
                    <span className='stat-title'>{item.label}</span>
                    <br />
                    <br />
                    <span className='stat-value'>{item.value}</span>
                </div> 
            );

        }

        return arr;

    }

    return (
        <>
            <Header />

            <div className='stats'>
                {renderStats()}
            </div>

            <Footer />
        </>
    )
}
