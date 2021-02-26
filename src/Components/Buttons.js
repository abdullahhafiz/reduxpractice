import React from 'react';
import { connect } from 'react-redux';
import { Increment, Decrement } from '../store/increment/action';

const Buttons = ({Increment, Decrement, increment, decrement}) =>{
    // let useState;
    // let [increment, setIncrement] = useState(0);
    // let [decrement, setDecrement] = useState(0);
    // let [setListOfIncrement] = useState([]);
    // let [setListOfDecrement] = useState([]);
    // const [labelNumber, setLabelNumber]= useState();
  
    function onClickIncrement() {
        const data = increment +1;
    Increment(data);
      console.log('Increment Value');
    }
  
    function onClickDecrement() {
        const data = decrement - 1;
        Decrement(data);
        console.log('Decrement Value');

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
   
  }
  const mapState = (state) => ({   
    increment: state.setIncrement,
    decrement: state.setDecrement
  })
  export default connect(mapState, mapDispatchToProps)(Buttons);