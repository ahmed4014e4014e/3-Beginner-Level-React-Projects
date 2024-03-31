import React from 'react'

export default function Title({ classes, text = "Hello from USA" }) {
    return (
        <h1 className={classes}>
            {text}
        </h1>
    )
}

