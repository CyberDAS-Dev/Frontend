import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '@fontsource/roboto'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/900.css'
import '@fontsource/quantico'
import '@fontsource/open-sans'
import '@fontsource/open-sans/300.css'
import '@/common/styles/index.scss'
import Header from '@/components/Header/Header'
import Landing from '@/pages/Landing/Landing'
import NotFoundPage from '@/pages/NotFound/NotFound'
import Footer from '@/components/Footer/Footer'
import Login from '@/pages/login'
import Signup from '@/pages/signup'
import Queue from '@/pages/Queue/Queue'
import Privacy from '@/pages/Privacy/Privacy'
import Feedback from '@/pages/Feedback/Feedback'
import UserAgreement from '@/pages/UserAgreement/UserAgreement'
import ghostRoutes from '@/common/routes/ghostRoutes'
import Metric from '@/utils/Metric'
import ScrollToTop from '@/utils/ScrollToTop'
import Technical from '@/pages/Technical/Technical'
import Copyright from '@/pages/Copyright/Copyright'

function App() {
    const isProduction = process.env.NODE_ENV === 'production'

    return (
        <div className="App">
            <Router>
                {isProduction ? <Metric /> : null}
                <ScrollToTop />
                <Header />
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/queue" component={Queue} />
                    <Route exact path="/privacy" component={Privacy} />
                    <Route exact path="/agreement" component={UserAgreement} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/feedback" component={Feedback} />
                    <Route exact path="/technical" component={Technical} />
                    <Route exact path="/copyright" component={Copyright} />
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
