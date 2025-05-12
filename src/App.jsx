import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Aleatorios from './Componentes/Aleatorios'
import Capturados from './Componentes/Capturados'
import Lista from './Componentes/Lista'
import Pokemon from './Componentes/Pokemon'
import Usuario from './Componentes/Usuario'
import Menu from './Componentes/Menu'
import Favoritos from './Componentes/Favoritos'
import { AppProvider } from './Contexto/Contexto';

function App() {


  return (
    <AppProvider>
    <Router>
      <Menu/>
      <Routes>
      <Route path="/" element={<Lista />} />
        <Route path="/usuarios" element={<Usuario />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
        <Route path="/capturados" element={<Capturados />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />

      </Routes>
    </Router>
    </AppProvider>
  )
}

export default App