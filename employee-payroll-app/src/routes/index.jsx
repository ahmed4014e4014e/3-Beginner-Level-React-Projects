/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { PageWrapper } from '../components/styles/PageWrapper'
import Title from '../components/utilites/Title'
import Footer from '../components/pages/Footer'

export default function Index() {
    return (
        //<div className='container animate-left text-center'>
        <PageWrapper className='animate-left'>
            <Title text='Welcome to ' />
            <h3 className='subtitle'>Employee payroll</h3>
            <p>
                Check out <br />
                <a href='https://norbertbm.com' target='_blank' className='text-primary mr-1'>{" "} www.norbertbm.com</a>
                for more projects and tutorials
            </p>
            <Footer />
        </PageWrapper>
    )
}
