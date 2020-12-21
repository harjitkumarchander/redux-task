import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';



const reducer = (state = { users : [], usersFetchingStatus : '' }, action) => {
    switch(action.type){
        case 'FETCHING_USERS' :
            return {...state, usersFetchingStatus : 'FETCHING USERS...'}


        case 'USERS_FETCHED' : 
            return Object.assign({}, state, {users : action.payload, usersFetchingStatus : "fetched succesfully"}  )
            
        default : return { ...state }
    }
}


const store = createStore(reducer, applyMiddleware(thunk));

export default store;