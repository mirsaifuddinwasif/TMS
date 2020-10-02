import React from 'react';
const MeasurementInput = (props) => {
    if (props.type === 'input') {
        return (
            <div className="form-group">
                <label>{props.label}: </label>
                <input type="text"
                    className="form-control"
                    value={props.value}
                    onChange={props.handleChange}
                />
            </div>
        )
    } else if (props.type === 'checkbox') {
        return (
            <div className="form-group">
                <label>{props.label}: </label>
                <input type="checkbox"
                    checked={props.value}
                    className="form-control"
                    onChange={props.handleChange}
                />
            </div>
        )
    }

}

export default MeasurementInput