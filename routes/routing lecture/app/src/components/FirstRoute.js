import React from 'react';
import { Link } from 'react-router-dom';

export default function FirstRount() {
  return (
    <div>
      <h1> I am the first route!!!</h1>

      <Link to='/second'>
        <button>Second</button>
      </Link>

      <Link to='/third'>
        <button>Third</button>
      </Link>

    </div>
  )
}