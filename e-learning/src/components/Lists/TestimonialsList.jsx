/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// Components
import TestimonialCard from "../page-components/TestimonialCard";
import Button from "../Button";
import ErrorBoundaries from "../Customed/Hooks/ErrorBoundaries";
// Data
import testimonialData from "../../db/testimonial-list.json";




export default function TestimonialsList() {
    const [testimonials, setTestimonials] = useState(() => {
        return JSON.parse(localStorage.getItem("testimonialData"))
    });

    // Data State
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);


    let parseData;

    const getLocalData = () => {
        setIsLoading(true);
        setHasError(false);
        // Simulate random error 
        function getRandomInt() {
            let int = Math.floor(Math.random() * 4);
            console.log(int);
            return int;
        }

        setTimeout(() => {
            parseData = JSON.parse(localStorage.getItem("testimonialData"));
            //setData(parseData);
            if (getRandomInt() < 2) {
                setHasError(true);
                //console.log("Has error");
            } else {
                setData(parseData);
            }
            setIsLoading(false);
        }, 2000)
        //console.log(data);
    }

    useEffect(() => {
        //setTestimonials(testimonialData);
        localStorage.setItem("testimonialData", JSON.stringify(testimonialData));

        const fetchData = async () => {
            try {
                setIsLoading(true);
                getLocalData();
            } catch (error) {
                //console.log(hasError);
                setHasError(true);
                setIsLoading(false);
            }
        }
        fetchData();
    }, [!data]);


    if (isLoading) {
        return <div className="alert alert-warning">Loading...</div>
    }

    // Handle Error 
    // if (hasError) {
    //     return (
    //         <div className="alert alert-danger">
    //             <p className="mr-1">Something went wrong</p>
    //             <Button text={"Try again"} onClick={getLocalData} />
    //         </div>
    //     )
    // }
    return (
        <>
            <ErrorBoundaries hasError={hasError} handleError={getLocalData}>
                {data &&
                    data.map((item) => (
                        <TestimonialCard key={item.id} img={item.img} fullName={item.fullName} jobTitle={item.jobTitle}
                            twitterHandle={item.twitterHandle} text={item.text} />
                    ))}
            </ErrorBoundaries>
        </>
    );
}
