import React from 'react'
import tw from "twin.macro";
import IMG_0355 from "../assets/images/IMG_0355.jpeg"

function About() {
    return (
        <div tw="border border-solid p-20 grid grid-rows-1 grid-flow-col gap-4 md:items-start">
            <img tw="row-span-1 items-center h-40 w-40 rounded-lg" src={IMG_0355} alt="Avatar" styleName="width:50px"></img>
            <div>
                <h4 tw="text-2xl font-serif"><b>About Kate</b></h4>
                <p tw="col-span-2 font-serif">Kate is a New York City based web designer and developer with a keen eye for the details. She holds a bachelor's degree in theatrical design, technology, and management from Wagner College, and is recently expanded her skill-set by taking a full-stack web development coding intensive through Trilogy at the University of Arizona. Kate is versed in HTML and CSS, JavaScript, Node.js, Express, MySQL, Mongoose, React, Python, Java, and several other programming languages. </p>
                </div>
        </div>
        
    )
}

export default About;
