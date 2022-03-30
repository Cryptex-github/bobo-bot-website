import { useState, useEffect } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

type StatsData = {
    total_command_uses: number
}

export default function Stats() {
    const [stats, setStats] = useState<StatsData | null>();

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch('https://api.bobobot.cf/stats');

            if (!resp.ok) {
                setStats(null);
                return;
            }

            setStats(await resp.json());
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />

            <div className='stats'>
                <div className='box'>
                    <span className='stat-title'>Total Command Uses</span>
                    <br />
                    <br />
                    <span className='stat-value'>{
                        stats ? stats.total_command_uses : 'N/A'
                    }</span>
                </div>
            </div>

            <Footer />
        </>
    )
}
