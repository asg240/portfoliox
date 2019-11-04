import React from "react"
import me from "./images/me.jpg";
 
function about(props) {
  return (
    <div class="about">
      <h1>Amit Gill</h1>
      <img src={me} width="30%" height="30%"/>
      <div className="about-text"> 
      <p>Born and raised in the San Francisco, Bay Area, I have largely made a career in the electric and conventional automobile industry.</p>
      <p>From debugging modules, electrical systems, and codebase, to mechanical repair of said vehicles and systems. </p>
      <p>I have a huge interest in anything involving technology, from AI to bare bones motor systems. With these interests, I now include system coding and development.</p>
      <p>Navigate my work and feel free to contact me with any inquries. </p>
      </div>
    </div>
  )
}
 
export default about;