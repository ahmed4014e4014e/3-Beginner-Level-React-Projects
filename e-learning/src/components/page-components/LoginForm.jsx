/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react'
import Title from '../Title'
import Button from "../Button"
import FormGroup from '../FormGroup'
import UseStateEffect from '../../Examples/UseEffectHook'

export default function LoginForm({ handleCancel, loggedIn, showRegister }) {
  //States
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  //References
  let emailRef = useRef();
  let passwordRef = useRef();

  //Handlers
  const chnageEmail = (e) => {
    setEmail(e.target.value);
  }
  const chnagePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      email: email,
      password: password,
      id: Math.floor(Math.random() * 1000)

    };
    //console.log(event);
    validateLoginForm();
    
  }

  function resetForm() {
    setEmail("");
    setPassword("");
  }
  function validateLoginForm() {
    email === "" && window.alert("Please enter your email!");
    password === "" || password.length <= 4 ? window.alert("Please enter your password!"): loggedIn();
  }
  // Effects
  useEffect(() => {
    emailRef.current.focus()
  }, [])



  return (
    <div className='modal-content form fadeIn' style={{ maxWidth: 500, width: 400, borderRadius: 10 }} >

      <Title text='Login' classes={"text-center mb-4"} />
      <h4 className='subtitle text-center'>Enter your credentials</h4>

      <form onSubmit={handleSubmit} >

        <FormGroup label={"Email"} type={"email"} placeholder={"Enter your email"} value={email} onChange={chnageEmail} reference={emailRef} />
        <FormGroup label={"Password"} type={"password"} placeholder={"Enter your password"} value={password} onChange={chnagePassword} reference={passwordRef} />

        <div className='d-flex space-between'>
          <Button classes={"btn-primary"} type={"submit"} text={"Login"} onClick={() => { window.alert("Form submission") }} />
          <Button className={"btn-close"} text={"x"} style={{position: "absolute", top: 20, right: 30}} onClick={handleCancel} />
          <Button type={"button"} text={"Register"} onClick={showRegister} />
        </div>

      </form>
    </div>
  )
}

// backgroundColor: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative", left: 200, borderRadius: 10