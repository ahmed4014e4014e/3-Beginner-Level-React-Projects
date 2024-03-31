/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState, useContext } from 'react'

// Context 

import { AuthenticationContext } from '../../context/AuthenticationContext'; 

// Utilites
import Button from "./Button"
import FormGroup from "./FormGroup"
// Styles
import { LoginStyle } from '../styles/LoginStyle';

export default function LoginForm() {

    // References
    const emailRef = useRef();
    useEffect(()=>{
        emailRef.current.focus();
    }, []);

    // Context 
    const authenticator = useContext(AuthenticationContext);


    // STATES
    const [auth, setAuth] = useState({
        email: "",
        password: "",
    })

    // Animation for access denied state
    const [animateAccessDenied, setAnimateAccessDenied] = useState(false);

    // Handlers
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setAuth({...auth, [name]: value});
    }

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login");

        // Context
        authenticator.login(auth.email, auth.password);
        clearForm();
        if(authenticator.isAuthenticated === false) {
            console.log("animation");
            setAnimateAccessDenied(true);
            setTimeout(() => {
                setAnimateAccessDenied(false);
            }, 700);
        }
    };

    function clearForm(){
        setAuth({
            email: "",
            password: "",
        });
    }
    
    return (
        <div className='form'>
            <h2 className='mb-2'>Enter your credentials</h2>
            <LoginStyle className={animateAccessDenied && "active"}>
                <FormGroup label={"Email:"} type={"email"} name={"email"} placeholder={"Enter your email"} reference={emailRef} value={auth.email} onChange={handleInputChange} />
                <FormGroup label={"Password:"} type={"password"} name={"password"} placeholder={"Enter your password"} value={auth.password} onChange={handleInputChange} />
                <Button type="submit" text={animateAccessDenied ? "Try again": "Login"} classes={animateAccessDenied ?"btn-danger btn-block" : "btn-accept btn-block"} onClick={handleLogin} />
            </LoginStyle>
        </div>
    )
}
