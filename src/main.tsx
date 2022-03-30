import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Privacy from './pages/Privacy'
import Stats from './pages/Stats'

import { BrowserRouter, Route, Routes } from 'react-router-dom';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route path='privacy' element={ <Privacy /> } />
                    <Route path='stats' element={ <Stats /> } />
                    <Route index element={ <App /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
