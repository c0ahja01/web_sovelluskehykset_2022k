import React from 'react';

export default function Nw(props) {

    console.log(props); 
  return (
    <div>
        <ul>
            {
                props.listItems.map(item =>{
                    return <div key={item}>{ item }</div>
                })
            }
        </ul>
    </div>)
}
