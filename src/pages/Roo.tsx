import { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

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

            <div className="center bold">
                <span>Roos</span>
            </div>

            <div className='roos'>
                {
                    roos ? 
                        roos.map(roo => (
                            <div className='roo'>
                                <a href={'https://cdn.bobobot.cf/uploads/' + roo}>
                                    <img className='roo' src={'https://cdn.bobobot.cf/uploads/' + roo} alt={roo.toString()} />
                                </a>
                            </div>
                        ))
                    :
                        <span>N/A</span>
                }
            </div>

            <Footer />
        </>
    )
}
