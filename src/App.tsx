import Header from './components/Header';
import Footer from './components/Footer';

import Typed from 'react-typed';


export default function App() {
    return (
        <>
            <Header />
            <div className="center bold">
                <Typed strings={['Bobo Bot, The Anime Bot but better.', 'Did I mention but better?', 'Yes I did.']} typeSpeed={40} backSpeed={50} />
            </div>

            <Footer />
        </>
    )
}
