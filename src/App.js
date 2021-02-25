
import React, { useState } from 'react';
import { Buttons } from './Components/Buttons';
import { LabelCounter } from './Components/label';
import { ListOfDecrement } from './Components/ListOfDecrement';
import { ListOfIncrement } from './Components/ListOfincrement';

function App() {

  let [increment, setIncrement]= useState(0);
  let [decrement, setDecrement]= useState(0);
  let [listOfIncrement, setListOfIncrement] = useState([]);
  let [listOfDecrement, setListOfDecrement] = useState([]);
  // const [labelNumber, setLabelNumber]= useState();

  function onClickIncrement(){
      let incrementHistory = []
      increment += 1;
      incrementHistory.push(increment);
      setListOfIncrement(incrementHistory);
      setIncrement(increment);
      console.log('Increment Value', increment);
  }

  function onClickDecrement(){
    let decrementHistory = [];
    decrement -= 1;
    decrementHistory.push(decrement);
    setListOfDecrement(decrementHistory);
    setDecrement(decrement);
    console.log('Decrement Value', decrement);
}


  return (
    <div className="App">
      <LabelCounter />
      <Buttons 
      onClickIncrement ={onClickIncrement}
      onClickDecrement ={onClickDecrement}/>
      <ListOfIncrement 
       listOfIncrement ={listOfIncrement}/>
          <div>
          <ListOfDecrement 
          listOfDecrement={listOfDecrement}/>
      </div>
    </div>

  );
}

export default App;
