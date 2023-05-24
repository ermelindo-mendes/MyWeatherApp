import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoMatch from '../router/NoMatch'
import Layout from '../layout/Layout'
import Main from '../pages/main'

function Routeur() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='*' element={<NoMatch />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Routeur
