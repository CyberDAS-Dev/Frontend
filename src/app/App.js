import React, { Fragment } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/Homepage/Homepage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Fragment>
                        <Header />
                        <Route exact path="/" component={HomePage} />
                        <Route path="*" component={NotFoundPage} />
                        <Footer />
                    </Fragment>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
