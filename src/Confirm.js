import React, { Component } from 'react'

export class Confirm extends Component {
    continue = (e) =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { 
            values : { name , address , age , email , city , bio } 
        } = this.props;
        return (
            <div>
                {name}<br />
                {address}<br />
                {age}<br />
                {email}<br />
                {city}<br />
                {bio}<br />
                <button onClick={this.back}>Back</button>
                <button onClick={this.continue}>Continue</button>
            </div>
        )
    }
}

export default Confirm
