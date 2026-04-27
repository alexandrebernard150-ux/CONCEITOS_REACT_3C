import { useState } from 'react'
import './App.css'

function App() {
const [carro, setCarro] = useState('BMW')
G
function trocardecarro() {
  setCarro("Mustang")

  }
  return (
    <>
     <h1>{carro}</h1>
     <button onClick= {trocardecarro}>trocardecarro</button>
     </>
  )
}

export default App
