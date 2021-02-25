import React from 'react';

export function ListOfIncrement(props){
    return (
        <div>
            {props.listOfIncrement.map((number,i) => {
          return <ul key={i}>{number}</ul>})
          }
        </div>
    )
}