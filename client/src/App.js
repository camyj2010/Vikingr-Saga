import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Home from './pages/Home';
// import World from './pages/Map/World'

export default function app() {
  return (
    <Routes>
    <Route>
       <Route path="/" element={<Login />} />
       <Route path="/Registro" element={<Registro />} />
       <Route path="/Home" element={<Home />} />
    </Route>
  </Routes>
  )
}
