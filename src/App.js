import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Challenge from "./pages/Challenge";
import ClassPage from "./pages/ClassPage";
import EventPage from "./pages/EventPage";
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <div>
                <Navbar />

                <ScrollToTop>
                    <Switch>
                        <Route path='/challenge'>
                            <Challenge />
                        </Route>
                        <Route path='/event'>
                            <EventPage />
                        </Route>
                        <Route path='/class'>
                            <ClassPage />
                        </Route>
                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </ScrollToTop>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
