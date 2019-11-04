import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import NavTabs from "./components/NavTabs";
import projects from './components/projects.js'; 
import contact from './components/contact.js'; 
import about from './components/about.js'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='nav'>
      </div>
      <div>
        <NavTabs />
        <Route exact path="/" component={about} />
        <Route exact path="/about" component={about} />
        <Route exact path="/components/projects" component={projects} />
        <Route path="/components/contact" component={contact} />
      </div>
 


    </div>
    </BrowserRouter>
  );
}

export default App;
