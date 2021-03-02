import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import FormData  from '../pages/formPage';
import { Increment, Decrement, ShowMyData } from '../store/increment/action';

const Buttons = ({Increment, Decrement, increment, ShowMyData}) =>{
    // let useState;
    // let [increment, setIncrement] = useState(0);
    // let [decrement, setDecrement] = useState(0);
    // let [setListOfIncrement] = useState([]);
    // let [setListOfDecrement] = useState([]);
    // const [labelNumber, setLabelNumber]= useState();
    useEffect(()=>{
           ShowMyData(); 
    },[])
    function onClickIncrement() {
        const data = parseInt(increment.increment + 1 );
        Increment(data);
    }
  
    function onClickDecrement() {
        const data = parseInt(increment.increment - 1);
        Decrement(data);

    //   let decrementHistory = [];
    //   decrement -= 1;
    //   decrementHistory.push(decrement);
    //   setListOfDecrement(decrementHistory);
    //   setDecrement(decrement);
    //   console.log('Decrement Value', decrement);
    }


    return(
        <div>
            <button className="button" onClick = {onClickIncrement}>Increment:</button>
            <button className="button" onClick = {onClickDecrement}>Decrement:</button>
            <p>
                Number:  
                    {increment.increment}
            </p>
            <FormData />

            {/* <button className="button" onClick = {()=>dispatch({type: 'INCREMENT'})}>Increment:</button>
            <button className="button" onClick = {()=>dispatch({type: 'DECREMENT'})}>Decrement:</button> */}
            
            {/* <button className="button" onClick = {()=>dispatch({type: props.onClickIncrement()})}>Increment:</button>
            <button className="button" onClick = {()=>dispatch({type:props.onClickDecrement()})}>Decrement:</button> */}
            {/* <button className="button" onClick = {(e)=>{props.onClickIncrement()}}>Increment:</button>
            <button className="button" onClick = {(e)=>{props.onClickDecrement()}}>Decrement:</button> */}
        </div>

    )
}

const mapDispatchToProps =  {    
      Increment: Increment,
      Decrement: Decrement,
      ShowMyData: ShowMyData,
   
  }
  const mapState = (state) => ({   
    increment: state.increment,
    show: state.showMyData,
  })
  export default connect(mapState, mapDispatchToProps)(Buttons);