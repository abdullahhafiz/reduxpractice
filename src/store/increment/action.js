import { SET_DECREMENT, SET_INCREMENT, SHOW_MY_DATA } from "./Constants";

export const Increment = (payload) =>{
    console.log('Increment here........', payload);
    return {type: SET_INCREMENT, payload: payload}
}

export function Decrement(payload){
    console.log('Decrement here........', payload);
    return {type: SET_DECREMENT , payload:payload}
}
export function ShowMyData(payload){
    return {type: SHOW_MY_DATA, payload:payload}
}
