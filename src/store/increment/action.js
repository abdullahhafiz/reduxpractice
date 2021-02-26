import { SET_DECREMENT, SET_INCREMENT } from "./Constants";

export const Increment = (payload) =>{
    console.log('Increment here........', payload);
    return {type: SET_INCREMENT, payload: payload}
}

export function Decrement(payload){
    console.log('Decrement here........', payload);
    return {type: SET_DECREMENT , payload:payload}
}
