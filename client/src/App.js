import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Registro from './pages/Registro';

export default function app() {
  return (
    <Routes>
    <Route>
       <Route path="/" element={<Login />} />
       <Route path="/Registro" element={<Registro />} />
    </Route>
  </Routes>
  )
}
