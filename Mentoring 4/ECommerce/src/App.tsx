import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from "react-router-dom"

import Home from "./Components/Home"
import Login from "./Components/Login"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;