import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Privacy from './pages/Privacy'

import { BrowserRouter, Route, Routes } from 'react-router-dom';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={ <App /> } />
                    <Route path='/privacy' element={ <Privacy /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
