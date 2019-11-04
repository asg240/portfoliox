import React from "react"
 
function contact(props) {
  return (
    <div>
      <h1>Contact</h1>

          <form method="POST">
          <label htmlFor="name">Name</label>
          <br/>
          <input type="text" name="name" />
          <br/>      
          <label htmlFor="email">Email</label>
          <br/>
          <input type="email" name="email" />
          <br/>
          <label htmlFor="message">Message</label>
          <br/>
          <textarea name="message" rows="3"></textarea>
          <br/>
          <input type="submit" />
        </form>
    </div>
  )
}
 
export default contact;