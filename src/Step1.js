import React, { Component } from 'react'

class Step1 extends Component {
    constructor(){
        super();
        this.state = {
            level1 : "",
            level2 : "",
            level3 : "",
            show : false
        }
    }

    level1 = () => {
        this.setState({
            level1 : true
        })
        console.log(this.state.level1);
    }
    handleClick = () => {
        this.setState({
            show : true
        })
        console.log(this.state.show);
    }
    render() {
        return (
            <div>
                 
                <div>
                    <input type="text" placeholder="name"/>
                    <input type="text" placeholder="class" />
                    <button onClick={this.handleClick} >Next</button>
                </div>
                {this.state.level1 === true ?
                    
                <div>
                    <input type="text" placeholder="age" />
                    <input type="text" placeholder="dob" />
                    <button>Next</button>
                </div>
                    : 
                <div>
                    <input type="text" placeholder="city" />
                    <input type="text" placeholder="state" />
                    <button>Next</button>
                </div>
                }
            </div>
        )
    }
}

export default Step1
