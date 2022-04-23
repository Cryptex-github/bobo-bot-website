import React from 'react';
import ReactDOM from 'react-dom';
import createGlobalStyle from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Privacy from './pages/Privacy';
import Stats from './pages/Stats';
import Roo from './pages/Roo';

const GlobalStyle = createGlobalStyle`
    * {
    font-family: 'Mulish', sans-serif;
    color: #FFFFFF;
    }

    body {
        background-color: #02101b;
        margin: 0;
    }
`


ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route path='privacy' element={ <Privacy /> } />
                    <Route path='stats' element={ <Stats /> } />
                    <Route path='roo' element={ <Roo /> } />
                    <Route index element={ <App /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
