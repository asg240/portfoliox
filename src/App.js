import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import projects from './projects.js'; 
import articles from './articles.js'; 
import about from './about.js'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Route exact path="/" component={projects}/>
      <Route path="/articles" component={articles}/>
      <Route path="/about" component={about}/>

      <div className='nav'>
        <div className='nav-sub'>

          <Link to="/" className="item">Projects</Link>
          <Link to="/articles" className="item">Articles</Link>
          <Link to="/about" className="item">About</Link>

        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
