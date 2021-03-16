
import { deleteObjectData } from '../store/increment/action';
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
        console.log('>>>>>. payload ', payload);
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
        // state.dataArray.map((item, i) => {
        //     console.log("Item ---> ", item);
        //     if(item == payload.email){
        //         return item = payload.userName;
        //     }
        // })
        console.log('updated data ', payload)
        let arr = [];
        return {
            ...state,
            Loading: false,
            data:payload,

            email: payload.email,
            userName: payload.userName,
            contact: payload.contact,

            dataArray: state.dataArray.map((item, i) => {
                console.log("Item ---> ", item);
                if(item === payload.userName ){
                    return payload.email
                }                 
                return item;
                // else if(item === payload.userName){
                //     return item = payload.email;
                // }
                // else if(item === payload.email){
                //     return item = payload.userName
                // }
            })

                // payload.userName,
                // payload.contact,                
            // payload: payload.updateData
        }
    }

    else if(type === actionType.DELETE_DATA){
        
        let temp = state.dataArray.filter((item , i) => {
            if(i != payload){
            return item
        }
        
        })
        return {
            ...state,
            Loading:false,
            // data: payload,
            // payload: temp
            dataArray: temp
        }
    }
   

else if(type === actionType.DELETE_OBJECT_DATA){
        delete payload.email;
        delete payload.contact;
        delete payload.userName;
        
    return {
        ...state,
        Loading:false,
        data: payload,
        
    }
}
return state;
} 

export default formDataShow;