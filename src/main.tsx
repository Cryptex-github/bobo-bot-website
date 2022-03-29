import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Privacy from './pages/Privacy'

import { BrowserRouter, Route, Routes } from 'react-router-dom';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <App /> } />
                <Route path='/privacy' element={ <Privacy /> } />

            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
