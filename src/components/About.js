import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Hi! I'm Amber Martinez and am currently a software engineering student at Flatiron School. I'll be graduating the program by the end of 2022 and am very excited to get into the industry! Feel free to connect with me. Always up for a chat!
      </p>
      <img src={image} alt='I made this'></img>
    </div>
  )
}

export default About;
