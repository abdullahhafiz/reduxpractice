
// import React, { useState } from 'react';
import { LabelCounter } from './Components/label';
import { ListOfDecrement } from './Components/ListOfDecrement';
import { ListOfIncrement } from './Components/ListOfincrement';
import { Provider } from "react-redux";
import store from "./store/store"
import Buttons from './Components/Buttons';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LabelCounter />
        <Buttons />
        <ListOfIncrement />
        <div>
          <ListOfDecrement />
        </div>
      </div>
    </Provider>
  );

}
// const mapDispatchToProps = (dispatch) => {
// xyz:xyz
//   return {

//     increment: () => dispatch({ type: 'INCREMENT' }),
//     decrement: () => dispatch({ type: 'DECREMENT' }),
//   }
// }

// export default connect(abc, mapDispatchToProps)(App);
export default App;
