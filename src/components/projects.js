import React from "react"
import '../App.css';
import words from "./images/words.jpg";
import crystal from "./images/crystals.jpg";
import fast from "./images/fnfTrivia.png";
import neon from "./images/neon.jpg";
import train from "./images/train.png";
import me from "./images/me.jpg";


 
function projects(props) {
  return (
    <div classname="projects">

      <div classname="project">
          <h1>Projects</h1>
      </div>
      <div classname="repoLinks">
        <a href="https://asg240.github.io/Psychic-Game/"><h6>Psychic Game</h6><img src={words} width="40%" height="40%"/></a>
        <a href="https://asg240.github.io/unit-4-game/"><h6>Chasing Crystals Game</h6><img src={crystal} width="40%" height="40%"/></a>
        <a href="https://asg240.github.io/TriviaGame/"><h6>Fast and Furious Trivia</h6><img src={fast} width="40%" height="40%"/></a>
        <a href="https://asg240.github.io/Giphy/"><h6>Giphy API Demo</h6><img src={neon} width="40%" height="40%"/></a>
        <a href="https://asg240.github.io/TrainSchedules/"><h6>Train Scheduler</h6><img src={train} width="40%" height="40%"/></a>
        <a href="https://github.com/asg240"><h6>My Repo</h6><img src={me} width="40%" height="40%"/></a>
         </div>
    </div>

  )
}
 
export default projects;