import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Projet from './pages/Projet';
import Contact from './pages/Contact';
import About from './pages/About';
import Publications from './pages/Publications';
import Conferences from './pages/Conferences';

function App() {


  return (
    <div className=' min-h-screen ' >
      <div className=' fixed top-0 w-full z-10 ' >
      <Navbar/>
      </div>
     

      
      <div className=" w-full items-stretch flex-grow flex-shrink ">
          
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projet/:id" element={<Projet />} />
                <Route path="/contacts" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/conferences" element={<Conferences />} />
                
              </Routes>
            </div>
    </div>
      
  )
}

export default App
