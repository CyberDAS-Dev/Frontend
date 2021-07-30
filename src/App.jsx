import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '@components/Header/Header'
import HomePage from '@pages/Homepage'
import NotFoundPage from '@pages/NotFoundPage'
import Footer from '@components/Footer'
import Login from '@pages/Login/index'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                </Switch>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route component={NotFoundPage} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App
