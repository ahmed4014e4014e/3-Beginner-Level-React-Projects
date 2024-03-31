import React from 'react'
import { useRouteError } from 'react-router-dom'


export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div className='alert alert-warning d-flex flex-column'>
            <h1>Opps!</h1>
            <p>Sorry, an unexpected error has occured.</p>
            <i>{error.status} {error.statusText} {error.message}</i>
        </div>
    )
}
