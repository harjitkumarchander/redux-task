import React, { Component } from 'react'

export class FormPersonalDetails extends Component {
    continue = (e) =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values , handleChange } = this.props;
        return (
            <div>
                <input type="text" placeholder="email" onChange={handleChange("email")} defaultValue={values.email} /><br />
                <input type="text" placeholder="city" onChange={handleChange("city")} defaultValue={values.city} /><br />
                <input type="text" placeholder="bio" onChange={handleChange("bio")} defaultValue={values.bio} /><br />
                <button onClick={this.back}>Back</button> 
                <button onClick={this.continue}>Continue</button> 
            </div>
        )
    }
}

export default FormPersonalDetails
