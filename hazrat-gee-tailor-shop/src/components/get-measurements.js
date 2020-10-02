import React, { Component } from 'react';
import axios from 'axios';
import MeasurementInput from './measurement-input';
export default class CreateMeasurement extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

        this.measurements = {
            coat: [
                { name: 'Total Length', type: 'input', key: 'length' },
                { name: 'Waist Size', type: 'input', key: 'waist' },
                { name: 'Chest Size', type: 'input', key: 'chest' },
                { name: 'Shoulder Size', type: 'input', key: 'shoulder' },
                { name: 'Sleeves Size', type: 'input', key: 'sleeves' },
                { name: 'H/B', type: 'input', key: 'hb' },
                { name: 'C/B', type: 'input', key: 'cb' },
                { name: 'Neck', type: 'input', key: 'neck' }
            ],
            pant: [
                { name: 'Waist Size', type: 'input', key: 'pantWaist' },
                { name: 'Total Length', type: 'input', key: 'pantLength' },
                { name: 'Hips', type: 'input', key: 'hips' },
                { name: 'In-Length', type: 'input', key: 'inLength' },
                { name: 'Knee', type: 'input', key: 'knee' },
                { name: 'Bottom', type: 'input', key: 'bottom' },
                { name: 'RAN Finish', type: 'input', key: 'ranFinish' },
                { name: 'Pice', type: 'checkbox', key: 'pice' },
                { name: 'Belt', type: 'checkbox', key: 'belt' },
                { name: 'Loops', type: 'checkbox', key: 'loops' },
                { name: 'Pleat', type: 'checkbox', key: 'pleat' },
                { name: 'Pocket', type: 'checkbox', key: 'pocket' },
                { name: 'Fly', type: 'checkbox', key: 'fly' },
                { name: 'Hip', type: 'checkbox', key: 'hip' },
                { name: 'Fold', type: 'checkbox', key: 'fold' },
                { name: 'W-Pock', type: 'checkbox', key: 'wPock' },
            ]
        }

        this.CLOTH_TYPE = {
            PANT: 'pant',
            COAT: 'coat'
        }

        this.state = {
            name: '',
            date: new Date().toISOString().split('T')[0],
            jobId: '',
            deliveryDate: '',
            contact: '',
            clothType: this.CLOTH_TYPE.COAT,

            length: '',
            waist: '',
            chest: '',
            shoulder: '',
            sleeves: '',
            hb: '',
            cb: '',
            neck: '',

            pantWaist: '',
            pantLength: '',
            hips: '',
            inLength: '',
            knee: '',
            bottom: '',
            ranFinish: '',
            pice: true,
            belt: false,
            loops: false,
            pleat: false,
            pocket: false,
            fly: false,
            hip: false,
            fold: false,
            wPock: false
        }
    }

    handleChange(key, type, e) {
        if (type === 'checkbox') {
            this.setState({
                [key]: e.target.checked
            });
        } else {
            this.setState({
                [key]: e.target.value
            });
        }
    }

    onChangeClothType(e) {
        this.setState({
            clothType: e.target.value
        });
    }

    editCase(){
        this.setState({
            chest: '-=-=-=-=-=-=-=-=-=-=-'
        })
    }

    onSubmit(e) {
        e.preventDefault();
        let data = {};
        this.measurements[this.state.clothType].forEach(m => data[m.key] = this.state[m.key]);
        console.log(data); // This is your final data to set
        return;

        if (this.state.chest_circumference === '' || this.state.shoulder_type === '') {
            console.log(`Form not submitted:`);
        } else {
            console.log(`Form submitted:`);
            console.log(`Chest Circumference: ${this.state.chest_circumference}`);
            console.log(`Shoulder Type: ${this.state.shoulder_type}`);

            const newClothMeasurement = {
                chest_circumference: this.state.chest_circumference,
                shoulder_type: this.state.shoulder_type
            };

            axios.post('http://localhost:4000/cloth_measurement/add', newClothMeasurement)
                .then(res => console.log(res.data));

            this.setState({
                chest_circumference: '',
                shoulder_type: ''
            })

            this.props.history.push('/');
        }
    }

    render() {

        return (
            <div style={{ marginTop: 10 }}>
                <h3>Get you Measured 'All In Inches'</h3>

                <div className="form-group">
                    <label>Dressing type: </label>
                    <br />
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="shoulderTypeOptions"
                            id="typeHigh"
                            value="coat"
                            checked={this.state.clothType === this.CLOTH_TYPE.COAT}
                            onChange={this.onChangeClothType.bind(this)}
                        />
                        <label className="form-check-label">COAT</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="shoulderTypeOptions"
                            id="typeRegular"
                            value="pant"
                            checked={this.state.clothType === this.CLOTH_TYPE.PANT}
                            onChange={this.onChangeClothType.bind(this)}
                        />
                        <label className="form-check-label">PANT</label>
                    </div>
                </div>

                <form onSubmit={this.onSubmit}>
                    {this.measurements[this.state.clothType].map((input) =>
                        <MeasurementInput value={this.state[input.key]} type={input.type} label={input.name} key={input.key} handleChange={this.handleChange.bind(this, input.key, input.type)}
                        />)}
                    <div className="form-group">
                        <input type="submit" value="Get Dressed Soon" className="btn btn-primary" />
                    </div>
                </form>

                <div className="form-group">
                        <input type="button" value="Edit Case" className="btn btn-primary" onClick={this.editCase.bind(this)}/>
                </div>
            </div>
        )
    }
}