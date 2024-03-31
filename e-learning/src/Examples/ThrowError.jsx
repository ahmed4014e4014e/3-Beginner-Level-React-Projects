/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Button from '../components/Button'

export default function ThrowError() {
    const [error, setError] = useState(null);
    const handleError = (e) => {
        // Using js
        // try {
        //     throw new Error("Whoops!")
        // } catch (event) {
        //     console.log(`${event.name}:${event.message}`);
        // }
        
        // Using React`
        try {
            throw Error("React component")
        } catch (error) {
            setError(error);
        }
    }
    if (error) {
        return (
            <div className='container'>
                <div className='alert alert-danger'>
                    Caught an error from {error.message}
                </div>
            </div>
        )


    }
    return (
        <div style={{ height: "100vh" }} className='container'>
            <h1 className='title'>ThrowError</h1>
            <Button onClick={handleError} />
        </div>
    )
}
