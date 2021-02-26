import * as actionType from './Constants';

const initialState = {
    increment: 0,
    decrement: 0,
    Loading: false
}


const incrementReducer = (state = initialState, action) => {
    const { Type, payload } = action;
    if (Type === actionType.SET_INCREMENT) {
        return {
            ...state,
            Loading: false,
            increment: payload

        }
    }
    else if (Type === actionType.SET_DECREMENT) {
        return {
            ...state,
            Loading: false,
            decrement: payload
        }
    }
    return state;
}

export default incrementReducer;