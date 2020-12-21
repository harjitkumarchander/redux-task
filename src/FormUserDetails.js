import React, { Component } from 'react'

export class FormUserDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values , handleChange } = this.props;
        return (
            <div>
                <input type="text" placeholder="name" onChange={handleChange("name")} defaultValue={values.name} /><br />
                <input type="text" placeholder="address" onChange={handleChange("address")} defaultValue={values.address} /><br />
                <input type="text" placeholder="age" onChange={handleChange("age")} defaultValue={values.age} /><br />
                <button onClick={this.continue}>Continue</button> 
                
            </div>
        )
    }
}

export default FormUserDetails
