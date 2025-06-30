//Los estilos .css son globales, aplica a todo el proyecto
import './App.css'
import Home from './pages/Home'
import Owner from './pages/Owner'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
//import Card from './components/Card'

function App() {
  return (
    <>
    <NavBar />
     <Routes>
       <Route path="/" element={<Home />} />,
       <Route path="/Owner" element={<Owner />} />
     </Routes>
    </>
  )
}

export default App