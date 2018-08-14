import React from 'react';


export default function Button(props){
  return (
    <div className="button-chickable" onClick={props.action}>
      {props.children}
    </div>
  )
}
