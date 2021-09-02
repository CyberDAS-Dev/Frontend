import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '@fontsource/roboto'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/900.css'
import '@fontsource/quantico'
import '@fontsource/open-sans'
import '@fontsource/open-sans/300.css'
import '@/styles/index.scss'
import Header from '@/components/Header/Header'
import Landing from '@/pages/Landing/Landing'
import NotFoundPage from '@/pages/NotFound/NotFound'
import Footer from '@/components/Footer/Footer'
import Login from '@/pages/Login/Login'
import Signup from '@/pages/Signup/Signup'
import Queue from '@/pages/Queue/Queue'
import Privacy from '@/pages/Privacy/Privacy'
import UserAgreement from '@/pages/UserAgreement/UserAgreement'
import ghostRoutes from '@/routes/ghostRoutes'

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/queue" component={Queue} />
                    <Route exact path="/privacy" component={Privacy} />
                    <Route exact path="/agreement" component={UserAgreement} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/" component={Landing} />
                    {ghostRoutes()}
                    <Route component={NotFoundPage} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App
