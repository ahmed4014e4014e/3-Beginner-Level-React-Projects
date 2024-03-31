/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import "./App.css";
// Hooks
import { useState, useEffect, useRef, useContext } from "react";
// Context 
import { ThemeContext } from "./context/themeContext"; 
// Components
import Title from "./components/Title";
import Header from "./components/Header";

import Button from "./components/Button";
import Modal from "./components/Modal";


import RegistrationForm from "./components/page-components/RegistrationForm";
// Sections 
import Categories from "./components/sections/Categories";
import Offers from "./components/sections/Offers";
// Icons

import { BsArrowUpCircleFill } from "react-icons/bs";

// Forms
import LoginForm from "./components/page-components/LoginForm";

// Data
import TestimonialsList from "./components/Lists/TestimonialsList";




function App() {
  //STATES
  // Modal State
  const [showCourseModal, setShowCourseModal] = useState(false);

  // Offers State
  const [showOffers, setShowOffers] = useState(false);

  // Scroll state
  const [goToTopArrow, setGoToTopArrow] = useState(false);

  //REFERENCES
  const offersRef = useRef();
  const topRef = useRef();

  //Form states 
  const [forms, setForms] = useState({
    loginForm: false,
    registrationForm: false,
  });
  const [login, setLogin] = useState(false);

  // Go to top Arrow context
  
  const {theme} = useContext(ThemeContext);
  //HANDLERS
  // Modal Handlers
  function handleLearningEvent() {
    setShowCourseModal(true);
  }
  function handleModalCancelEvent() {
    setShowCourseModal(false);
  }
  // Offers Handler
  const handleShowOffers = () => {
    showOffers === false ? setShowOffers(true) : setShowOffers(false);
  };
  const handleScrollToOffers = () => {
    offersRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll handler

  const handleGoToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Form handles
  // Login form handle
  const handleShowLoginForm = () => {
    setForms({ registrationForm: false, loginForm: true });
  };
  const handleCancelLoginForm = () => {
    setForms({ ...forms, loginForm: false });
  };
  function handleLoginFormValidation() {
    setForms({ ...forms, loginForm: false });
    setShowCourseModal(false);
    setLogin(true);
  }
  // Register form
  function handleShowRegistrationForm(){
    setForms({loginForm: false, registrationForm: true});
  }
  const handleCancelRegistrationForm = () => {
    setForms({...forms, registrationForm: false})
  }


  //Scroll handle
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setGoToTopArrow(true);
    } else {
      setGoToTopArrow(false);
    }
  }
  //Effects

  //Scroll Effect
  useEffect(() => {
    window.onscroll = () => scrollFunction();
  }, []);

  return (
    <>
      <div className="container container-lg" ref={topRef}>
        {/* Header */}
        <Header login={login} handleLearningEvent={handleLearningEvent} handleScrollToOffers={handleScrollToOffers}></Header>
        {/* Main */}
        <main>
          {/* CATEGORIES */}
          
          < Categories login={login} handleLearningEvent={handleLearningEvent} />
          {/* OFFERS */}
          
          <Offers offersRef={offersRef} showOffers={showOffers} handleShowOffers={handleShowOffers} />
          {/* TESTIMONIALS */}
          <section className="testimonials my-4">
            <Title
              classes={"subtitle text-center mb-4"}
              text="What our users say"
            />
            <div className="testimonials-container">
              <TestimonialsList />

              {/* <TestimonialCard /> */}
            </div>
          </section>
        </main>
      </div>
      {/* Utilities */}
      {/* Modal */}
      {showCourseModal && (
        <Modal
          title={"Access denied"}
          text={"Please login in order to get access to this content"}
          cancelEvent={handleModalCancelEvent}
          loginEvent={!login && handleShowLoginForm}
        />
      )}
      {/* Go to top arrow */}
      {goToTopArrow && (
        <BsArrowUpCircleFill
          className="arrowToTop"
          onClick={handleGoToTop}
          color={theme==="dark" && "#ff9800"}
        />
      )}
      {/* Forms */}
      {/* LoginForm */}
      {forms.loginForm &&
        (<div className="modal">
          <LoginForm handleCancel={handleCancelLoginForm} showRegister={handleShowRegistrationForm} loggedIn={handleLoginFormValidation} />
        </div>)
      }

      {/* RegistrationForm */}
      {forms.registrationForm &&
        (<div className="modal">
          <RegistrationForm handleCancel={handleCancelRegistrationForm} showLogin={handleShowLoginForm} />
        </div>)
      }


    </>
  );
}

export default App;
