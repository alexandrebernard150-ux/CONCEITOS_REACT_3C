import { useState } from 'react'
import './App.css'
import Login from './paginas/login'
import Cadastro from './paginas/cadastro'

function App() {
const [tela, setTela] = useState('login')

const trocardeTela = (pagina) => {
  setTela(pagina)
  }

  const redenrizar = () =>{
    if(tela === 'login'){
      return <Login/>
    }else if(tela === 'cadastro'){ 
      return <Cadastro/>
    } else{
      return <Login/>
    }

  }

  return (
    <>
     <button onClick= {()=>trocardeTela('cadastro')}>Cadastro</button>
     <button onClick= {()=>trocardeTela('login')}>Login</button>
     <hr />
     {redenrizar()}
     </>
  )
}

export default App
