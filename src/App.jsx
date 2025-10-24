import { FaSearch } from "react-icons/fa";
import './App.css'

function App() {


  return (
    <>
    <header className='header'>
      <div className='div-img'> 
        <img src="../public/imgs/logo-sin-fondo.png" alt=""  className='img'/>
      </div>

      <div className='div-title'>
        <h1 className='title'>BALLON D' OR</h1>
      </div>

      <div className="div-search">
        <FaSearch className="icon"/>
        <input type="text" className="inp"/>
      </div>
    </header>
    </>
  )
}

export default App
