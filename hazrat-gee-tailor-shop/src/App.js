import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import getMeasurements from "./components/get-measurements";
import EditMeasurement from "./components/edit-measurement.component";
import MeasurementsList from "./components/measurements-list.component";
import PantMeasurementsList from "./components/pant-measurements-list.component";

import logo from "./logo.svg";

class App extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
                            <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
                        </a>
                        <Link to="/" className="navbar-brand">HAZRAT GEE TAILOR SHOP</Link>
                        <div className="collpase navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/create" className="nav-link">Get You Measured</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <br/>
                    <Route path="/" exact component={MeasurementsList} />
                    <Route path="/" exact component={PantMeasurementsList} />
                    <Route path="/edit/:id" component={getMeasurements} />
                    <Route path="/create" component={getMeasurements} />
                </div>
            </Router>
        );
    }
}

export default App;