import { combineReducers } from 'redux';

const artist = (state = [], action) => {
    console.log(state, "state")
    switch(action.type) {
        case 'ADD_ARTIST':
            return [ ...state, action.value ]
        default:
            return state
    }
}

export default combineReducers({ artist })