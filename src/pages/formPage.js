import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteData, SubmitData, updateData } from '../store/increment/action';

const FormData = ({ SubmitData, updateData , submitData, deleteData}) => {
        const [onDelteIndex, setDeleteIndex] = useState(0);
        function onDelete(index){

            setDeleteIndex(index);

        }
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
        console.log('Here Submit');
        
    }
    function onClickSubmitToUpdate(){
    
        console.log('update Submit called');
        updateData(formData);
    }
    function onClickDelete(){
        // let dataArray =['userName', 'email', 'contact']
        // let toDelete = 'userName';
        // let index = dataArray.indexOf(toDelete);
        // if(index > -1){
        //     dataArray.splice(index, 1)
        // }
        console.log('Delete called');
        deleteData(onDelteIndex);
    }

    return (
        <div>
            <form>
                User Name:<input type='text' name="userName" value={userName} onChange={(e) => { onChange(e) }}></input><br />

            Email:<input type='text' name='email' value={email} onChange={(e) => { onChange(e) }}></input><br />

            Contact:<input type='text' name='contact' value={contact} onChange={(e) => { onChange(e) }}></input><br />

                <button type='button' onClick={onClickSubmit}>Submit :</button>
                <button type='button' onClick={onClickSubmitToUpdate}>Submit To Update :</button><br />

                
            </form>
            <div>
            <input type = 'text' value={onDelteIndex} name={onDelteIndex} onChange = {(e)=>{onDelete(e.target.value)}}></input>
                <button type='button' onClick={onClickDelete}>Delete :</button>
            </div>
            <ul>
                {submitData.userName}<br />
                {submitData.email}<br />
                {submitData.contact}<br />
                {/* {submit.submit} */}
            </ul>
            <ul>
                <p><h1>Data By Object </h1></p>
                {submitData.data.userName}<br />
                {submitData.data.email}<br />
                {submitData.data.contact}
            </ul>
                <ul>
                    <p><h1>Data By Array</h1></p>
                    {
                        
                        submitData.dataArray.map((number, i)=>{
                            return <ul key={i}>{number}</ul>
                        })
                    }
                </ul>

                <ul>
                    <p><h1>Deleted Data</h1></p>

                </ul>

        </div>
    )
}

const mapDispatchToProps = {
    SubmitData: SubmitData,
    updateData: updateData,
    deleteData: deleteData

}
const mapState = (state) => ({

    submitData: state.formData,
})
export default connect(mapState, mapDispatchToProps)(FormData);