import React from 'react'
import tw from "twin.macro";

function PetCard() {
    return (
        <div tw="px-10 py-10">
        <div tw="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img tw="object-cover w-full h-56" src="https://64.media.tumblr.com/65ca5884a0de6c16e8c930991796d443/af20f97889a3fe76-63/s1280x1920/d91a9db5be35496ff11ea145b39584a0e0b67708.png" alt="avatar" />
        
        <div tw="py-5 text-center">
            <a href="https://project2-pet-rater.herokuapp.com/" target="_blank" tw="block text-2xl font-bold text-gray-800 dark:text-white">Rate My Pet</a>
            <span tw="text-sm text-gray-700 dark:text-gray-200">An app for friendly competition.</span>
        </div>
    </div>
    </div>
    
    )};

export default PetCard;
