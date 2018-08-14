import React from 'react';
import { Link } from 'react-router-dom'

export default function Colors() {
  var colors = ['puple, green, red']
  let btns = colors.map(color => {
    return (
      <Link key={color} to={`/results/${color}`}>
        <button>{color}</button>
      </Link>
    )
  })
  return (
    <div>

      <h1> plese pick a Color to view cars</h1>
      {/* <Link to={`/results/purple`}><button>Purple</button></Link>
     <Link to={``}><button>Green</button></Link>
     <Link to={``}><button>Red</button></Link> */}

      {btns}

    </div>
  )
}