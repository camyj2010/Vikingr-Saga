import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Home from './pages/Home';
import Leccion1 from './pages/Leccion1';
import Quiz_1 from './pages/Quices/Quiz_1';
import Hut from './pages/Hut';
// import World from './pages/Map/World'

export default function app() {
  return (
    <Routes>
    <Route>
       <Route path="/" element={<Login />} />
       <Route path="/Registro" element={<Registro />} />
       <Route path="/Home" element={<Home />} />
       <Route path="/Leccion1" element={<Leccion1 />} />
       <Route path="/Quiz_Vikingos" element={<Quiz_1 />} />
       <Route path="/Hut" element={<Hut />} />
    </Route>
  </Routes>
  )
}
