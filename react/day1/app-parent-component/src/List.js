import React from 'react';
//import './List.css';


export default function List(props) {
  var list = props.list.map((item, i) => {
    return <li key={i} onClick={props.handleClick.bind(null, item)} />
  })
  return (
    <div className="list">
      <h1>{props.title}</h1>
      <ul>{List}</ul>
    </div>
  )
}