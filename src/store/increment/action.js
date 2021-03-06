import { DELETE_DATA, DELETE_OBJECT_DATA, SET_DECREMENT, SET_INCREMENT, SHOW_MY_DATA, SUBMIT_DATA, UPDATE_DATA } from "./Constants";

export const Increment = (payload) => {
    console.log('Increment here........', payload);
    return { type: SET_INCREMENT, payload: payload }
}

export function Decrement(payload) {
    console.log('Decrement here........', payload);
    return { type: SET_DECREMENT, payload: payload }
}
export function ShowMyData(payload) {
    return { type: SHOW_MY_DATA, payload: payload }
}

export const SubmitData = (payload) => {
    return {
        type: SUBMIT_DATA,
        payload: payload
    }
}

export const updateData = (payload) => {
    return {
        type: UPDATE_DATA,
        payload: payload
    }
}
export const deleteData = (payload)=>{
    return {
        type: DELETE_DATA,
        payload: payload
    }
}

export const deleteObjectData = (payload)=>{
    return {
        type: DELETE_OBJECT_DATA,
        payload: payload
    }
}
