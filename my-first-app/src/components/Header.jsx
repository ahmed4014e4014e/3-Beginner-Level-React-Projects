import React from 'react'

export default function Header({ children, headerText = "default header" }) {
    return (
        <header style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #fff"
        }}>
            <h2>{headerText}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque reprehenderit atque sequi eum, assumenda voluptate saepe. Ullam tenetur modi, eum quos aliquam maxime enim dolore qui molestiae soluta voluptatum nihil.</p>
            {children}
        </header>

    )
}
