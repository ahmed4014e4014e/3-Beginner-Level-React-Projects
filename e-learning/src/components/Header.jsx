import React from 'react'
// Components
import Title from './Title'
import Button from './Button'
// Imgs
import headerImg from "../img/header-img.png";


export default function Header({ children, login,  handleLearningEvent, handleScrollToOffers }) {
  return (
    <header className='header d-flex'>
      <div className="header-content mb-2">
        <br />
        <br />
        <br />
        <Title
          text="Learn to code by watching others"
          classes={"header-title fs-xxl mb-3"}
        />
        <p>
          See how experienced developers solve problems in real-time.
          Watching scripted tutorials is great, but understanding how
          developers think is invaluable.
        </p>
        <br />
        <br />
        <div className="header-btn">
          <Button
            classes={"btn-primary text-light"}
            type={"button"}
            text={"Try it free 30 days"}
            onClick={!login ? handleLearningEvent : () => window.alert("You are logged in.")}
          />
          <Button
            classes={"btn-secondary"}
            type={"button"}
            text={"Learn more..."}
            onClick={handleScrollToOffers}
          />
        </div>
        <img src={headerImg} alt="header-img" className="header-img" />
      </div>


      {children}
    </header>
  )
}
