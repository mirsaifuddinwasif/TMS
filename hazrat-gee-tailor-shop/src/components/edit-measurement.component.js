import React, {Component} from 'react';
import axios from 'axios';

export default class EditMeasurement extends Component {

    constructor(props) {
        super(props);

        this.onChangeChestCircumference = this.onChangeChestCircumference.bind(this);
        this.onChangeShoulderType = this.onChangeShoulderType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            chest_circumference: '',
            shoulder_type: ''
        }

    }

    componentDidMount() {
        axios.get('http://localhost:4000/cloth_measurement/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    chest_circumference: response.data.chest_circumference,
                    shoulder_type: response.data.shoulder_type
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeChestCircumference(e) {
        this.setState({
            chest_circumference: e.target.value
        });
    }

    onChangeShoulderType(e) {
        this.setState({
            shoulder_type: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            chest_circumference: this.state.chest_circumference,
            shoulder_type: this.state.shoulder_type
        };
        console.log(obj);
        axios.post('http://localhost:4000/cloth_measurement/update/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>

                <h3 align="center">Update Measurement</h3>
                <form onSubmit={this.onSubmit}>
                    
                    <div className="form-group">
                        <label>Chest Circumference: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.chest_circumference}
                               onChange={this.onChangeChestCircumference}
                        />
                    </div>
                    <div className="form-group">
                        <label>Shoulder type: </label>
                        <br/>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="shoulderTypeOptions"
                                   id="typeHigh"
                                   value="High"
                                   checked={this.state.shoulder_type === 'High'}
                                   onChange={this.onChangeShoulderType}
                            />
                            <label className="form-check-label">High</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="shoulderTypeOptions"
                                   id="typeRegular"
                                   value="Regular"
                                   checked={this.state.shoulder_type === 'Regular'}
                                   onChange={this.onChangeShoulderType}
                            />
                            <label className="form-check-label">Regular</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="shoulderTypeOptions"
                                   id="typeLow"
                                   value="Low"
                                   checked={this.state.shoulder_type === 'Low'}
                                   onChange={this.onChangeShoulderType}
                            />
                            <label className="form-check-label">Low</label>
                        </div>
                    </div>
                    <br/>

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}