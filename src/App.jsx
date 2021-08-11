import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '@fontsource/roboto'
import '@fontsource/roboto/300.css'
import '@fontsource/quantico'
import '@fontsource/open-sans'
import '@fontsource/open-sans/300.css'
import '@/styles/index.scss'
import Header from '@/components/Header/Header'
import Home from '@/pages/Home/Home'
import NotFoundPage from '@/pages/NotFound/NotFound'
import Footer from '@/components/Footer/Footer'
import Login from '@/pages/Login/Login'
import Signup from '@/pages/Signup/Signup'

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/" component={Home} />
                    <Route component={NotFoundPage} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App
