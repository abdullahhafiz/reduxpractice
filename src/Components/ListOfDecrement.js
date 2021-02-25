import React from 'react';

export function ListOfDecrement(props){
    return (
        <div>
            {props.listOfDecrement.map((number,i) => {
          return <ul key={i}>{number}</ul>})
          }
        </div>
    )
}