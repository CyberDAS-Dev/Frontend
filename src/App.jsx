import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '@/components/Header/Header'
import Home from '@/pages/Home/Home'
import NotFoundPage from '@/pages/NotFound/NotFound'
import Footer from '@/components/Footer/Footer'
import Login from '@/pages/Login/Login'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login} />
                </Switch>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={NotFoundPage} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App
