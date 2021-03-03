
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
            ].splice(0,3)
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

    else if(type === actionType.DELETE_DATA){
        let temp = state.dataArray.filter((item , i) => {
            if(i != payload){
            return item
        }
        })
        console.log('>>>>>>>>>>>>> deleted data\n\t', temp);
        return {
            ...state,
            Loading:false,
            dataArray: temp
            // ].map.filter('dataArray', (dataArray)=>{
            //     let tempData = dataArray.filter(item , i) => {
            //         if(i!==payload)
            //         return item
            //     })
            //     return tempData;
            // })
        }
    }
    return state;
} 

export default formDataShow;