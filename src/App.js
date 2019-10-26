import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import projects from './components/projects.js'; 
import articles from './components/articles.js'; 
import about from './components/about.js'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Route exact path="/" component={about}/>
      <Route path="/components/articles" component={articles}/>
      <Route path="/components/projects" component={projects}/>

      <div className='nav'>
        <div className='nav-sub'>

          <Link to="/" className="item">About</Link>
          <Link to="/components/articles" className="item">Articles</Link>
          <Link to="/components/projects" className="item">Projects</Link>

        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
