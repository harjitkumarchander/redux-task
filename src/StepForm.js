import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FromPersonalDetails from './FormPersonalDetails';
import Success from './Success';
import Confirm from './Confirm';

export class StepForm extends Component {
    state = {
        step : 1,
        name : '',
        address : '',
        age : '',
        email : '',
        city : '',
        bio : ''
    }
    nextStep = () => {
        const { step } = this.state
        this.setState({
        step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
        step : step - 1
        })
    }
    handleChange = (input) => (e) => {
        this.setState({
            [input] : e.target.value
        })
    }
    render() {
        const { step } = this.state;
        const { name , address , age , email , city , bio } = this.state;
        const values = { name , address , age , email , city , bio };
        switch (step) {
            case 1 :
                return(
                    <FormUserDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                );
            case 2 :
                return(
                    <FromPersonalDetails nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                );
            case 3 :
                return(
                    <Confirm nextStep={this.nextStep} prevStep={this.prevStep} values={values} />
                );
            case 4 :
                return(
                    <Success />
                );
            default : 
                return null;
        }
    }
}

export default StepForm
