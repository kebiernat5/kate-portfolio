import React from 'react'
import tw from "twin.macro";

function WorkDayCard() {
    return (
        <div tw="px-10 py-10">
        <div tw="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img tw="object-cover w-full h-56" src="https://64.media.tumblr.com/d1c72a2080a7d9409ce120833f5cd647/f870fa7620c43ef9-6d/s1280x1920/33f7f072867e53b2b69526c052d9e9c4abb037c9.png" alt="avatar" />
        
        <div tw="py-5 text-center">
            <a href="https://kebiernat5.github.io/Organizing-the-Day/" target="_blank" tw="block text-2xl font-bold text-gray-800 dark:text-white">Organizing the Day</a>
            <span tw="text-sm text-gray-700 dark:text-gray-200">An app designed for scheduling the work day.</span>
        </div>
    </div>
    </div>
    
    )};

export default WorkDayCard;
