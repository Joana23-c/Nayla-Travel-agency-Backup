// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Homepage from "./start.tsx";
import './App.css'

function App() {


  return (
<>
 <Routes>
  <Route path="/" element={<Homepage />} />
 </Routes>
</>
  )
}

export default App
