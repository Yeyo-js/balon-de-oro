import { FaSearch } from "react-icons/fa";
import './App.css'
import { GanadoresBalonDeOro } from "./components/templates/ganadoresBalonDeOro";
import { Footer } from "./components/organisms/footer";
import { useState } from "react";


function App() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  };

  return (
    <>
    <header className='header'>
      <div className='div-img'> 
        <img src="../public/imgs/logo-sin-fondo.png" alt=""  className='img'/>
      </div>

      <div className='div-title'>
        <h1 className='title'>BALON DE ORO</h1>
      </div>

      <div className="div-search">
        <FaSearch className="icon"/>
        <input type="text" className="inp"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Buscar..."
          />
      </div>
    </header>
    <GanadoresBalonDeOro searchTerm={searchTerm}/>
    <Footer />
    </>
  )
}

export default App
