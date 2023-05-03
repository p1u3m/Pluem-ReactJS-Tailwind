import { useState } from 'react';
import './App.css';
import { Navbar } from './components/NavBar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/DashBoard';
import HomePage from './pages/HomePage';
import Project from './pages/Project';
import ErrorPages from './pages/ErrorPages';

export { default as Navbar } from './Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/DashBoard" element={<Dashboard/>}/>
      <Route path="/Project" element={<Project/>}/>
      <Route path="*" element={<ErrorPages/>}/>
    </Routes>
    </BrowserRouter>
    )
}

export default App
