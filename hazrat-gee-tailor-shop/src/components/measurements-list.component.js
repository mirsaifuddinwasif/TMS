import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Measurement = props => (
    <tr>
        <td>{props.measurement.length}</td>
        <td>{props.measurement.waist}</td>
        <td>{props.measurement.chest}</td>
        <td>{props.measurement.shoulder}</td>
        <td>{props.measurement.sleeves}</td>
        <td>{props.measurement.hb}</td>
        <td>{props.measurement.cb}</td>
        <td>{props.measurement.neck}</td>
        <td>
            <Link to={"/edit/" + props.measurement._id}>Edit</Link>
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
                this.setState({measurement: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    measurementList() {
        return this.state.measurement.map(function (currentMeasurement, i) {
            return <Measurement measurement={currentMeasurement} key={i}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Measurements List</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>Length</th>
                        <th>Waist</th>
                        <th>chest</th>
                        <th>shoulder</th>
                        <th>sleeves</th>
                        <th>hb</th>
                        <th>cb</th>
                        <th>neck</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.measurementList()}
                    </tbody>
                </table>
            </div>
        )
    }
}