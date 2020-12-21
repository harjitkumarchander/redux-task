import React, { Component } from 'react';
class Postapi extends Component {
    constructor(){
        super();
        this.state = {
            course_name : '',
            course_content : ''
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://staging.nugen.co.in/api/v1/courses',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then((res) =>{
            console.log(res);
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Course Name</label>
                    <input type="text" name="course_name" onChange={this.handleInput} />
                    <label>Course Content</label>
                    <input type="text" name="course_content" onChange={this.handleInput} />
                    <button>Add Course</button>
                </form>
            </div>
        )
    }
}
export default Postapi;