import { SET_DECREMENT, SET_INCREMENT } from "./Constants";

export function setIncrement(payload){
    console.log('here........');
    return {type: SET_INCREMENT, payload: payload}
}
export function setDecrement(payload){
    return {type: SET_DECREMENT , payload:payload}
}
