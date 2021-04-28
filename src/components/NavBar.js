import React from "react";
import tw from "twin.macro";
import Header from "./Header";


function NavBar() {
  return (
    <div tw="border border-solid border-black">
    <Header />
      <nav>
        <ul tw="py-10 flex">
          <li tw="px-3 flex">
            <a href="#about-me"> About Me  </a>
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
            <a href="#work"> Work  </a>
          </li>
          <li tw="px-3 flex">
            <a href="#contact">  Contact</a>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
