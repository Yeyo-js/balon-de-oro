import { FaGithub } from 'react-icons/fa'
import './footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <img className='footer-img' src="../public/imgs/logo-sin-fondo.png" alt="balon de oro" />

                <ul className='list'>
                    <li className='list-devloopers__title'>
                       <p>DESARROLLADO POR: </p> 
                    </li>
                    <li className='list-devloopers '>
                        <p className='name'>
                            Deyvi Acosta
                        </p>
                        <a className='icon' href="https://github.com/Yeysonacosta"><FaGithub /></a>
 
                    </li>
                    <li className='list-devloopers'>
                        <p className='name'>
                            Yerson Fustamante
                        </p>
                        <a className='icon' href="https://github.com/Yeyo-js"><FaGithub /></a>

                    </li>
                    <li className='list-devloopers'>
                        <p className='name'>
                            shirley Cruzado 
                        </p>
                        <a className='icon' href="https://github.com/shirleydayana1"><FaGithub /></a>

                    </li>
                </ul>
            </div>
                <p className="footer__copy">
                    &copy;  2025 Balón de Oro. Desarrollado por deyvi Acosta , Yerson Fustamante  y Shirley Cruzado . Todos los derechos reservados.
                </p>
        </footer>
    )
}

export { Footer }