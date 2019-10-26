import React from "react"
import Thumbnail from "./thumbnail.js"
 
function about(props) {
  return (
    <div>
      <h1>About</h1>
      <Thumbnail
      link="./images/me.jpg"
      image=""
      title=""
      category=""
      />
   <p>Born and raised in the San Francisco Bay Area, I have made a career in the automobile industry reaching into technician debugging and mechanical repair or said vehicles and systems. </p>
   <p>I have a huge interest in anything technological, from AI to bare bones motor systems. With these interests, I now include system coding and development.</p>
   <p>Navigate my work and feel free to contact me with any inquries. Ill respond accordingly. </p>
   

    </div>
  )
}
 
export default about;