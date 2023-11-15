import { useState } from 'react'
import Navbar from './components/NavBar/NavBar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import About from './pages/Meme';
import Conferences from './pages/Albumdujour';
import SpotifySearch from "./pages/SpotifyResearch.jsx";

function App() {


  return (
    <div className=' min-h-screen ' >
      <div className=' fixed top-0 w-full z-10 ' >
      <Navbar/>
      </div>
     

      
      <div className=" w-full items-stretch flex-grow flex-shrink ">
          
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/projet/:id" element={<Projet />} /> */}
                <Route path="/about" element={<About />} />
                <Route path="/conferences" element={<Conferences />} />
                <Route path ="/spotify_research" element={<SpotifySearch/>}/>
                
              </Routes>
            </div>
        </div>

    )
}

export default App
