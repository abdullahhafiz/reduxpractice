import * as actionType from './Constants';

const initialState = {
    increment: 0,
    decrement: 0,
    Loading: false
}


const incrementReducer = (state = initialState, action) => {
    const { type, payload } = action;
    if (type === actionType.SET_INCREMENT) {
        console.log("Increment Reducer Called: ",payload);
        return {
            ...state,
            Loading: false,
            increment: payload

        }
    }
    else if (type === actionType.SET_DECREMENT) {
        console.log('Decrement Reducer Callled :', payload);
        return {
            ...state,
            Loading: false,
            increment: payload
        }
    }

    else if (type === actionType.SHOW_MY_DATA) {
        console.log('Show Data Reducer Callled :', payload);
        return {
            ...state,
            Loading: false,
            showMyData: payload
        }
    }

    return state;
}

export default incrementReducer;