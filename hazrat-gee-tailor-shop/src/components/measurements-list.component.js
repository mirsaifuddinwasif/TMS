import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Measurement = props => (
    <tr>
        <td>{props.measurement.chest_circumference}</td>
        <td>{props.measurement.shoulder_type}</td>
        <td>
            <Link to={"/edit/"+props.measurement._id}>Edit</Link>
        </td>
    </tr>
)

export default class MeasurementsList extends Component {

    constructor(props) {
        super(props);
        this.state = {measurement: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/cloth_measurement/')
            .then(response => {
                this.setState({ measurement: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    measurementList() {
        return this.state.measurement.map(function(currentMeasurement, i){
            return <Measurement measurement={currentMeasurement} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Measurements List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                    <tr>
                        <th>Chest Circumference</th>
                        <th>Shoulder Type</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.measurementList() }
                    </tbody>
                </table>
            </div>
        )
    }
}