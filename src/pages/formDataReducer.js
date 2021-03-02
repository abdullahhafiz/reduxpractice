
import * as actionType from '../store/increment/Constants';

const formInitialState ={
    userName: '',
    email: '',
    contact: '',
    Loading: false,
    data: {},
    dataArray: [],

}
const formDataShow = (state = formInitialState, action)=>{
    const {type, payload } =action;
    if(type === actionType.SUBMIT_DATA){
        return {
            ...state,
            Loading: false,
            userName: payload.userName,
            email: payload.email,
            contact: payload.contact,
            data: payload,
            dataArray: [
                payload.userName,
                payload.email,
                payload.contact
            ]
        }
    }
    else if(type === actionType.UPDATE_DATA){
        return {
            ...state,
            Loading: true,
            data: payload,
            email: payload.email
        }
    }
    return state;
} 

export default formDataShow;