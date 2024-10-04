import React from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './modules/Home';
import LatestReleases from './modules/LatestRelease';
import TopRatedMovies from './modules/TopRatedMovies';
import { RouterProvider } from 'react-router-dom';
import route from './router/router';
function App() {
  return (
     <RouterProvider router={route}/>
  );
}

export default App;
