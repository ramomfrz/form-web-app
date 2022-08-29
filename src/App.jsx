import { BrowserRouter, Routes, Route, } from "react-router-dom";
import React, { useState } from "react"
import Form from "./components/Form/form"
import Home from "./components/Home/"
import Sidebar from './components/sidebar/'
import Clientes from './components/Clientes/clientes'
import "./App.css"

function App() {
  const [page, setPage] = useState(0)
  const [clients, setClients] = useState([])
  const [formDados, setFormDados] = useState([]);
  const FormTitles = ["Nos informe alguns dados", "onde podemos te encontrar?", "E por último..."];

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="form" element={<Form page={page} setPage={setPage} formDados={formDados} setFormDados={setFormDados} FormTitles={FormTitles} clients={clients} setClients={setClients} />} />
          <Route path="clientes" element={<Clientes formDados={clients} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
