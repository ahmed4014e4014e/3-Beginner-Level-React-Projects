/* eslint-disable no-unused-vars */
import React from 'react'

export default function MyList() {
  const items = ["Item 1", "Item 2", "Item 3"];
  return (
    <div style={{height: "100vh"}}>
      <h1 className='title'>MyList</h1>
      <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
