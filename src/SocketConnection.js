import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class SocketConnection extends Component {
    constructor(){
        super();
        this.state = {
            response : false,
            endpoint : "http://localhost:1234",
            msg : "not yet connected to Socket"
        }
    }
    connectMe = () => {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on('connection', (data) => this.setState ({ msg : 'connected to socket' + data }));
        socket.on('fromAPI', data => this.setState ({ response : data }));
    }
    render() {
        const { response, msg } = this.state;
        return (
            <div style={{textAlign : "center"}}>
                {response ? <p>The Temprature un Florance is : {response} F </p>
                : <p>Loading</p>
                }
                <span dangerouslySetInnerHTML={{__html : msg }}></span><br />
                <button onClick={()=>{this.connectMe()}}>connect to Socket</button>
            </div>
        )
    }
}

export default SocketConnection;
