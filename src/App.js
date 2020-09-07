import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import des componsants
import Menu from './components/Menu';
import About from './components/About'; 
import Competences from './components/Competences'; 
import Projets from './components/Projets';
import Footer from './components/Footer';


function Portfolio() {
  return ( 
  <div> 
    <Menu/>
    <About/>
    <Competences/>
    <Projets/>
    <Footer/>
  </div>
  );
}

export default Portfolio;