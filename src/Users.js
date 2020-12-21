import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/Action';

class Users extends Component {
    constructor(){
        super();
        this.state = {
            inputValue : ''
        }
    }

    handleChangeInput = (e) => {
        this.setState({
            inputValue : e.target.value
        })
        console.log(e.target.value);
    }
    render() {
        return (
            <div>
                {this.props.usersFetchingStatus}
                <h1>All users are here</h1>
                
                <input className="val" type="text" onChange={this.handleChangeInput} value={this.state.inputValue} />
                <button onClick={()=>this.props.onFetchUsers(this.state.inputValue)}>Click to Fetch</button>
                <ul>
                    {
                        this.props.users.map((v,i)=>{
                            return(
                            <li key={i}>{v.name.first}
                            <img src={v.picture.large} alt="pictureimage" />
                            </li>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        // inputValue : state.inputValue,
        // users : state.users,
        ...state
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        
        onFetchUsers : (val) => dispatch(fetchUsers(val))
}
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);