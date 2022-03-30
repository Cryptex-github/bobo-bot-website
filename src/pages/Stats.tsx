import { useState, useEffect } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

type StatsData = {
    channels: number,
    commands: number,
    guilds: number,
    total_command_uses: number,
    users: number
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

    function renderStats() {
        if (!stats) {
            return <span>N/A</span>;
        }

        const arr = [];

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
