import React from 'react'
import tw from "twin.macro";

function About() {
    return (
        <div tw="border border-solid p-20 grid grid-rows-1 grid-flow-col gap-4 md:items-start">
            <img tw="row-span-1 items-center" src="http://www.simpleimageresizer.com/_uploads/photos/012e48da/IMG_0355_2_100x100.jpg" alt="Avatar" styleName="width:50px"></img>
            <div>
                <h4 tw="text-2xl font-serif"><b>About Kate</b></h4>
                <p tw="col-span-2 font-serif">Kate is a New York City based web designer and developer with a keen eye for the details. She holds a bachelor's degree in theatrical design, technology, and management from Wagner College, and is recently expanded her skill-set by taking a full-stack web development coding intensive through Trilogy at the University of Arizona. Kate is versed in HTML and CSS, JavaScript, Node.js, Express, MySQL, Mongoose, React, Python, Java, and several other programming languages. In her free time, Kate enjoys photography and travel. </p>
                </div>
        </div>
        
    )
}

export default About;
