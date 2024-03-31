/* eslint-disable no-unused-vars */
import React, { useContext} from 'react'
// Context
import { AuthenticationContext } from '../context/AuthenticationContext';



import LoginForm from '../components/utilites/LoginForm'
import Title from "../components/utilites/Title";
import {PageWrapper} from "../components/styles/PageWrapper";
import Footer from '../components/pages/Footer';
import Button from '../components/utilites/Button';

export default function Home() {
  const authenticator = useContext(AuthenticationContext);

  return (
    <PageWrapper className='animate-left'>
      <Title text='Welcome' />
      {!authenticator.isAuthenticated ? ( <LoginForm />) : (<Button onClick={authenticator.logout} text='Logout' classes={"btn-warning btn-block"} />)}
      <Footer />
    </PageWrapper>
  )
}
