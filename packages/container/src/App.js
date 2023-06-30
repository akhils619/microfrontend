import React from 'react'
import MarketingApp from './components/MarketingApp'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <MarketingApp />
            </BrowserRouter>
        </div>
    )
}

export default App