import React from "react";
import tw from "twin.macro";
import Header from "./Header";
import KEB_0902 from "../assets/images/KEB_0902.jpeg";

function NavBar() {
  return (
    <div tw="border border-solid border-black bg-hero-pattern" >
      <Header />
      <nav>
        <ul tw="py-10 flex px-20 py-40 text-2xl font-serif max-w-full">
          <li tw="px-3 flex">
            <a href="#about-me"> About Me </a>
          </li>
          <li tw="px-3 flex">
            <a
              href="assets/images/Header/Kate Biernat - Resume.pdf"
              target="blank"
            >
              Resume
            </a>
          </li>
          <li tw="px-3 flex">
            {" "}
            <a href="#work"> Work </a>
          </li>
          <li tw="px-3 flex">
            <a href="#contact"> Contact</a>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;

{
  /*style={{ backgroundImage: `url("https://images.unsplash.com/photo-1564930631811-db9454350458?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyJTIwd2FsbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60")`}}> */
}
