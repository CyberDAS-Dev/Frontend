import React, { Fragment } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/Homepage'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <>
                        <Header />
                        <Route exact path="/" component={HomePage} />
                        <Route path="*" component={NotFoundPage} />
                        <Footer />
                    </>
                </Switch>
            </Router>
        </div>
    )
}

export default App
