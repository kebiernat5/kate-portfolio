import React from 'react'
import tw from "twin.macro";

function WorkDayCard() {
    return (
        <div tw="px-10 py-10">
        <div tw="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img tw="object-cover w-full h-56" src="https://64.media.tumblr.com/e8c7bed12d76fd70e08fc738cb0c9615/968645b8517964cd-44/s640x960/9005597dfc5daf93bc219bccc38f4a3680c939c3.png" alt="avatar" />
        
        <div tw="py-5 text-center">
            <a href="https://working-on-my-fitness.herokuapp.com/" target="_blank" tw="block text-2xl font-bold text-gray-800 dark:text-white">Fitness Tracker</a>
            <span tw="text-sm text-gray-700 dark:text-gray-200">An app designed to track your workouts.</span>
        </div>
    </div>
    </div>
    
    )};

export default WorkDayCard;
