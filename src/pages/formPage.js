import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SubmitData, updateData } from '../store/increment/action';

const FormData = ({ SubmitData, updateData , submitData}) => {

    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        contact: '',
    });
    const {
        userName,
        email,
        contact,
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


    return (
        <div>
            <form>
                User Name:<input type='text' name="userName" value={userName} onChange={(e) => { onChange(e) }}></input><br />

            Email:<input type='text' name='email' value={email} onChange={(e) => { onChange(e) }}></input><br />

            Contact:<input type='text' name='contact' value={contact} onChange={(e) => { onChange(e) }}></input><br />

                <button type='button' onClick={onClickSubmit}>Submit :</button>
                <button type='button' onClick={onClickSubmitToUpdate}>Submit To Update :</button>
                
            </form>
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

        </div>
    )
}

const mapDispatchToProps = {
    SubmitData: SubmitData,
    updateData: updateData,

}
const mapState = (state) => ({

    submitData: state.formData,
})
export default connect(mapState, mapDispatchToProps)(FormData);