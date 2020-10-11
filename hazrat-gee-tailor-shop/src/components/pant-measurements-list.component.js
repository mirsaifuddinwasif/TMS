import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Measurement = props => (
    <tr>
        <td>{props.measurement.jobId}</td>
        <td>{props.measurement.name}</td>
        <td>{props.measurement.contact}</td>
        <td>{props.measurement.date}</td>
        <td>{props.measurement.deliveryDate}</td>
        <td>{props.measurement.clothType}</td>
        <td>
            <Link to={"pant/edit/" + props.measurement._id}>Edit</Link>
        </td>
        <td>
            <Link to={"/delete/" + props.measurement._id}>Delete</Link>
        </td>
    </tr>
)

export default class MeasurementsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            measurement: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/cloth_measurement/pants')
            .then(response => {
                this.setState({measurement: response.data})
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
                <h2>PANTS</h2>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>Job Id</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Date</th>
                        <th>Delivery</th>
                        <th>Type</th>
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