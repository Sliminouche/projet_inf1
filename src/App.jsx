import {useState} from 'react'
import Navbar from './components/NavBar/NavBar'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import MemePage from './pages/Meme';
import AlbumDuJour from './pages/AlbumDuJour.jsx';
import SpotifyResearch from "./pages/SpotifyResearch.jsx";

function App() {
    return (
        <div className=' min-h-screen '>
            <div className=' fixed top-0 w-full z-10 '>
                <Navbar/>
            </div>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/create-meme" element={<MemePage/>}/>
                <Route path="/find-your-album" element={<AlbumDuJour/>}/>
                <Route path="/spotify-research" element={<SpotifyResearch/>}/>
            </Routes>
        </div>
    )
}

export default App