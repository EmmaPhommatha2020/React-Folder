import React from 'react';
import { Link } from 'react-router-dom';

export default function FirstRount() {
  return (
    <div>
      <h1> I am nav</h1>

      <Link exact to='/'>
        <button>First</button>
      </Link>

      <Link to='/second'>
        <button>Second</button>
      </Link>

      <Link to='/third'>
        <button>Third</button>
      </Link>

    </div>
  )
}