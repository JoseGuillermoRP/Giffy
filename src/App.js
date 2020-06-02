import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import {Link, Route } from "wouter";


function App() { 

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/panda'>Gif de pandas</Link>
        <Link to='/gif/perro'>Gif de perro</Link>
        <Link to='/gif/peru'>Gif de peru</Link>
        <Route  
        component={ListOfGifs}
        path="/gif/:keyword"/>
     
         
      </section>
    </div>
  );
}

export default App;
