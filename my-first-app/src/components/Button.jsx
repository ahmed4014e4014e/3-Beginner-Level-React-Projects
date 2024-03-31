import React from 'react'

export default function Button({classes, text="Button", icon, handleEvent }) {
  return (
    <button className={`btn ${classes}`} onClick={handleEvent} >
      {icon}
      {text}
    </button>
  )
}
