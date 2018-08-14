import React from 'react';
import { Link } from 'react-router-dom';

export default function ThirdRoute() {
  return (
    <div>
      <h1> I am the third route!!!</h1>

      <Link exact to='/'>
        <button>First</button>
      </Link>

      <Link to='/second'>
        <button>Second</button>
      </Link>

    </div>)
}