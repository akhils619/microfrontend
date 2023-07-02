import React from 'react';
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles'
import MarketingApp from './components/MarketingApp'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

function App() {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <BrowserRouter>
                    <Header />
                    <MarketingApp />
                </BrowserRouter>
            </StylesProvider>
        </div>
    )
}

export default App