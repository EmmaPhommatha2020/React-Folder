import React from 'react';
import { Link } from 'react-router-dom';

export default function SecondRoute() {
  return (
    <div>
      <h1> I am the second route!!!</h1>

      <Link exact to='/'>
        <button>First</button>
      </Link>

      <Link to='/third'>
        <button>Third</button>
      </Link>

    </div>
  )
}