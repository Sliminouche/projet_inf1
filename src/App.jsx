import {useState} from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
<<<<<<< HEAD
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Contact from './pages/Contact';
import About from './pages/Meme';
import Conferences from './pages/Albumdujour';
=======
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Projet from './pages/Projet';
import Contact from './pages/Contact';
import About from './pages/About';
import Publications from './pages/Publications';
import Conferences from './pages/Conferences';
import SpotifySearch from "./pages/SpotifyResearch.jsx";
>>>>>>> main

function App() {


<<<<<<< HEAD
  return (
    <div className=' min-h-screen ' >
      <div className=' fixed top-0 w-full z-10 ' >
      <Navbar/>
      </div>
     

      
      <div className=" w-full items-stretch flex-grow flex-shrink ">
          
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/projet/:id" element={<Projet />} /> */}
                <Route path="/contacts" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/conferences" element={<Conferences />} />
                
              </Routes>
=======
    return (
        <div className=' min-h-screen bg-gray-100 '>
            <div className=' fixed top-0 w-full z-10 '>
                <Navbar/>
>>>>>>> main
            </div>


            <div className=" w-full items-stretch flex-grow flex-shrink ">

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projet/:id" element={<Projet/>}/>
                    <Route path="/contacts" element={<Contact/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/publications" element={<Publications/>}/>
                    <Route path="/conferences" element={<Conferences/>}/>
                    <Route path="/spotify_research" element={<SpotifySearch/>}/>
                </Routes>
            </div>
        </div>

    )
}

export default App
