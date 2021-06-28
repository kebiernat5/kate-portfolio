import React from 'react'
import tw from "twin.macro";

function WeatherCard() {
    return (
        <div tw="px-10 py-10">
        <div tw="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img tw="object-cover w-full h-56" src="https://64.media.tumblr.com/b745376b07496a078a9c15efc972cc21/c4d87319e462f423-d8/s640x960/c6d4bc696b5c6fdd4baca346fe8f732c1e326af3.png" alt="avatar" />
        
        <div tw="py-5 text-center">
            <a href="https://kebiernat5.github.io/Watching-the-Weather/" target="_blank" tw="block text-2xl font-bold text-gray-800 dark:text-white">Watching the Weather</a>
            <span tw="text-sm text-gray-700 dark:text-gray-200">An app to check the forecast</span>
        </div>
    </div>
    </div>
    
    )};

export default WeatherCard;