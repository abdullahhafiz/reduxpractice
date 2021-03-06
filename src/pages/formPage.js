import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteData, deleteObjectData, SubmitData, updateData } from '../store/increment/action';

const FormData = ({ SubmitData, updateData , newFormData, deleteData, newFormDataObject, newFormDataArray, deleteObjectData}) => {
        const [onDelteIndex, setDeleteIndex] = useState(0);
        function onDelete(index){

            setDeleteIndex(index);
        }

        // const [onDeleteObject, setDeleteObject]= useState();
        // function onDeleteDataObject(object){
        //     setDeleteObject(object)
        // }
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        contact: '',
        index: ''
    });
    const {
        userName,
        email,
        contact,
        index
    } = formData;
    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,

        })
    }
    function onClickSubmit() {
        SubmitData(formData);        
    }
    function onClickSubmitToUpdate(){
        updateData(formData);
    }
    function onClickDelete(){
        // let dataArray =['userName', 'email', 'contact']
        // let toDelete = 'userName';
        // let index = dataArray.indexOf(toDelete);
        // if(index > -1){
        //     dataArray.splice(index, 1)
        // }
        // if(newFormData.data.userName === undefined || newFormData.data.userName === null){
        //     deleteData(onDelteIndex);
        // }
        console.log('Delete called');
        deleteData(onDelteIndex);
    }
    function onClickObjectDelete(){
        console.log('Object Delete Called');
        deleteObjectData(formData);
    }
    return (
        <div>
            <form id = 'form'>
                User Name:<input id = 'nameInput' type='text' name="userName" value={userName} onChange={(e) => { onChange(e) }}></input><br />

            Email:<input id = 'emlInput' type='text' name='email' value={email} onChange={(e) => { onChange(e) }}></input><br />

            Contact:<input id = 'cntctInput' type='text' name='contact' value={contact} onChange={(e) => { onChange(e) }}></input><br />

                <button id = 'btnSbmt' type='button' onClick={onClickSubmit}>Submit :</button>
                <button id = 'btnSbmtUpdate' type='button' onClick={onClickSubmitToUpdate}>Submit To Update :</button><br />

                
            </form>
            <div>
            Delete Input:<input id = 'dlteInput' type = 'text' value={onDelteIndex} name={onDelteIndex} onChange = {(e)=>{onDelete(e.target.value)}}></input>
                <button id = 'dlteBtn' type='button' onClick={onClickDelete}>Delete :</button>
               </div>
            <div>
            <button id = 'objdlteBtn' type='button' onClick={onClickObjectDelete}>Delete Object Button :</button>
            </div>
                <ul id = 'dataLst'>
                    <li>{newFormData.userName}</li>
                    <li>{newFormData.email}</li>
                    <li>{newFormData.contact}</li>
                </ul>
        <p><h1>Data By Object </h1></p>
        <ul id = 'objData'>
        <li>{newFormDataObject.data.userName}</li>
        <li>{newFormDataObject.data.email}</li>
        <li>{newFormDataObject.data.contact}</li>
        </ul>
    
        
                    <p><h1>Data By Array</h1></p>
                    <ul id = 'arrData'>
                    {
                            // newFormData.dataArray.map((itemArray, i) => {
                            //     <ul key={i}>
                            //     <p><h1>Data By Array </h1></p>
                            //     {itemArray.userName}<br />
                            //     {itemArray.email}<br />
                            //     {itemArray.contact}
                            // </ul>
                            // })

                        // console.log("_____________\n",newFormData.dataArray)
                        //  newFormData.dataArray.map((item, i) => {
                        //      console.log('item \n', item);
                        //     // return <ul key={i}>{item}</ul> 
                        // })
                        
                        newFormDataArray.dataArray.map((number, i)=>{
                            return <ul key={i}>{number}</ul>
                        })
                    }
                </ul>
        </div>
    )
}

const mapDispatchToProps = {
    SubmitData: SubmitData,
    updateData: updateData,
    deleteData: deleteData,
    deleteObjectData: deleteObjectData,

}
const mapState = (state) => ({

    newFormData: state.formData,
    newFormDataObject: state.formData,
    newFormDataArray: state.formData
})
export default connect(mapState, mapDispatchToProps)(FormData);