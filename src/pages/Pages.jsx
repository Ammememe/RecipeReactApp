import React from 'react'
import Home from './Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Searched from './Searched'
import Cuisine from './Cuisine'
import Recipe from './Recipe'
import { AnimatePresence } from 'framer-motion'

function Pages() {
  //Använd useLocation för att hämta aktuell location
  const location = useLocation();
  return (
    //AnimatePresence för att hantera animation in och ut
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
