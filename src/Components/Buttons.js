import React from 'react';

export function Buttons(props){
    return(
        <div>
            <button className="button" onClick = {(e)=>{props.onClickIncrement()}}>Increment:</button>
            <button className="button" onClick = {(e)=>{props.onClickDecrement()}}>Decrement:</button>
            {/* <button className="button">Addition:</button>
            <button className="button">Subtraction:</button> */}


        </div>
    )
}