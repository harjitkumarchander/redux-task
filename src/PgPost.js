import React, { Component } from 'react';
import axios from 'axios';

class PgPost extends Component {
    constructor(){
        super();
        this.state = {
            users : [],
            state : '',
            city : '',
            address : '',
            name : '',
            email : '',
            phone : '',
            price : '',
            photos : null
        }
    }

    handleInput =(e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(e.target.value);
    }

    handleImageChange = (e) => {
        this.setState({
            photos : e.target.files[0].name
        })
        console.log(e.target.files[0].name);
    }
    // componentDidMount(){
    //     fetch('http://whispering-refuge-34674.herokuapp.com/api/pg')
    //     .then(res=>res.json())
    //     .then(res=>{
    //         this.setState({
    //             users : res
    //         })
    //         console.log(res);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }

    // handleOnClick = () => {
    //     let fd = new FormData();
    //     fd.append('state', this.state.state);
    //     fd.append('city', this.state.city);
    //     fd.append('address', this.state.address);
    //     fd.append('name', this.state.name);
    //     fd.append('email', this.state.email);
    //     fd.append('price', this.state.price);
    //     fd.append('phone', this.state.phone);
    //     fd.append('photos', this.state.photos);

    //     axios.post('http://localhost:3001/posts',fd)
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch((err)=>{
    //         console.log("error while posting data to api", err);
    //     })
    // }

    handleOnClick = (e) => {
        let fd = new FormData();
        fd.append('state', this.state.state);
        fd.append('city', this.state.city);
        fd.append('address', this.state.address);
        fd.append('name', this.state.name);
        fd.append('email', this.state.email);
        fd.append('price', this.state.price);
        fd.append('phone', this.state.phone);
        fd.append('photos', this.state.photos);

        fetch('http://whispering-refuge-34674.herokuapp.com/api/pg', {
            method: 'POST',
            headers: {
                'Content-Type' : 'multipart/form-data'
                // 'Content-Type' : 'application/json'
            },
            body: fd
        })
        .then(res=>{
            console.log(res)
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    render() {
        return (
            <div>
                {/* {
                    this.state.users.map((v,i)=>{
                        return (
                            <ul key={i}>
                    <li>{v.email}</li>
                            </ul>
                        );
                    })
                } */}
                <h1>Upload form</h1> 
                <input type="text" placeholder="state" name="state" onChange={this.handleInput} /><br />
                <input type="text" placeholder="city" name="city"   onChange={this.handleInput} /><br />
                <input type="text" placeholder="address" name="address" onChange={this.handleInput} /><br />
                <input type="text" placeholder="email" name="email" onChange={this.handleInput} /><br />
                <input type="text" placeholder="phone" name="phone" onChange={this.handleInput} /><br />
                <input type="text" placeholder="price" name="price" onChange={this.handleInput} /><br />
                <input type="text" placeholder="name" name="name" onChange={this.handleInput} /><br />
                <input type="file" placeholder="photo" accept="image/png, image/jpg" onChange={this.handleImageChange} /><br />
                <button onClick={this.handleOnClick}>Submit</button>
            </div>
        )
    }
}

export default PgPost;