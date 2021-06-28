import React from "react";
// import logo from './logo.svg';
import './App.css';
import tw from "twin.macro";

import NavBar from "./components/NavBar";
import About from "./components/About";
import WorkDayCard from "./components/WorkDayCard";
import FitnessTrackerCard from "./components/FitnessTrackerCard";
import Contact from "./components/Contact"
import WeatherCard from "./components/WeatherCard";
import PetCard from "./components/PetCard";

function App() {
  return (
    <div>
    <>
    <NavBar />
    <About />
    <br></br>
    <h1 tw="text-3xl font-serif text-center"><b>Work</b></h1>
    <br></br>
    <div tw="flex justify-items-center flex-wrap">
    <FitnessTrackerCard />
    <WorkDayCard />
    <WeatherCard />
    <PetCard />
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Contact />
    </>
    </div>
     // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a */}
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
