import Header from './components/Header';
import Footer from './components/Footer';

import Typed from 'react-typed';


export default function App() {
    return (
        <>
            <Header />
            <div className="center bold">
                <Typed strings={['Bobo Bot, The Anime Bot but better.', 'Did I mention but better?', 'Yes I did.', 'Bobo Bot, The Anime Bot but better.']} typeSpeed={40} backSpeed={60} />
            </div>

            <div className='buttons'>
                <a className='no-deco' href="https://discord.com/api/oauth2/authorize?client_id=808485782067216434&permissions=448827607232&scope=bot%20applications.commands">
                    <button className='button invite-button'><span>Invite Bobo Bot</span></button>
                </a>

                <a className='no-deco' href="https://discord.gg/AHYTRPr8hZ">
                    <button className='button support-server-button'><span>Support Server</span></button>
                </a>
            </div>

            <Footer />
        </>
    )
}
