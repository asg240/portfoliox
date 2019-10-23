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

      <Route exact path="/" component={projects}/>
      <Route path="/components/articles" component={articles}/>
      <Route path="/components/about" component={about}/>

      <div className='nav'>
        <div className='nav-sub'>

          <Link to="/" className="item">Projects</Link>
          <Link to="/components/articles" className="item">Articles</Link>
          <Link to="/components/about" className="item">About</Link>

        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
