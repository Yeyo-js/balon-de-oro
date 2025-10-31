import React, { useState, useEffect } from 'react';
import './ganadoresBalonDeOro.css';
import ganadoresData from '../../data/balon-oro.json'
import { FiBookOpen } from 'react-icons/fi';
import { BiWorld } from 'react-icons/bi';
import { IoFootballOutline } from 'react-icons/io5';

function GanadoresBalonDeOro() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [ganadorSeleccionado, setGanadorSeleccionado] = useState(null);

  const abrirModal = (ganador) => {
    setGanadorSeleccionado(ganador);
    setModalAbierto(true);
    document.body.style.overflow = 'hidden';
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setGanadorSeleccionado(null);
    document.body.style.overflow = 'unset';
  };

  // Cerrar modal con tecla ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        cerrarModal();
      }
    };
    
    if (modalAbierto) {
      window.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [modalAbierto]);

  return (
    <div className="ganadores-container">
      <div className='container-titulos'>
        <h1 className="titulo-principal">🏆 Ganadores del Balón de Oro</h1>
        <p className='texto-principal'> El Balón de Oro es uno de los premios más importantes del fútbol mundial.
                                      Se entrega cada año al mejor jugador o jugadora del mundo, en reconocimiento
                                      a su talento, esfuerzo y destacada actuación durante la temporada. 
                                      Más que un trofeo, representa el sueño y la gloria de quienes viven
                                      y sienten el fútbol.
        </p>
      </div>
      
      {/* GRID DE TARJETAS */}
      <div className="ganadores-grid">
        {ganadoresData.ganadores.map(ganador => (
          <div 
            key={ganador.id} 
            className="ganador-card"
            onClick={() => abrirModal(ganador)}
          >
            {/* Foto del Jugador */}
            <div className="card-image-container">
              <img 
                src={ganador.jugador.imagen} 
                alt={ganador.jugador.nombre}
                className="jugador-foto"
              />
            </div>

            {/* Bandera y Nombre */}
            <div className="card-info">
              <div className="pais-info">
                <img 
                  src={ganador.pais.bandera} 
                  alt={ganador.pais.nombre}
                  className="bandera"
                />
                <span className="jugador-nombre">{ganador.jugador.nombre}</span>
              </div>

              {/* Año y Logo del Club */}
              <div className="card-footer">
                <span className="año">{ganador.año}</span>
                <img 
                  src={ganador.club.logo} 
                  alt={ganador.club.nombre}
                  className="club-logo"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {modalAbierto && ganadorSeleccionado && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            {/* Botón Cerrar */}
            <button className="modal-close" onClick={cerrarModal}>×</button>
            
            {/* Header del Modal con fondo dorado */}
            <div className="modal-header">
              <div className="modal-trofeo">🏆</div>
              <h2 className="modal-titulo">{ganadorSeleccionado.jugador.nombreCompleto}</h2>
              <p className="modal-subtitulo">Balón de Oro {ganadorSeleccionado.año}</p>
            </div>

            {/* Body del Modal */}
            <div className="modal-body">
              <div className="modal-grid">
                
                {/* Columna Izquierda - Imagen */}
                <div className="modal-imagen-section">
                  <img 
                    src={ganadorSeleccionado.jugador.imagen}
                    alt={ganadorSeleccionado.jugador.nombre}
                    className="modal-imagen"
                  />
                </div>

                {/* Columna Derecha - Información */}
                <div className="modal-info-section">
                  
                  {/* Información Personal */}
                  <div className="info-block">
                    <h3 className="info-titulo"><FiBookOpen /> Información Personal</h3>
                    <div className="info-item">
                      <span className="info-label">Nombre Completo:</span>
                      <span className="info-valor">{ganadorSeleccionado.jugador.nombreCompleto}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Fecha de Nacimiento:</span>
                      <span className="info-valor">
                        {new Date(ganadorSeleccionado.jugador.fechaNacimiento).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Posición:</span>
                      <span className="info-valor">{ganadorSeleccionado.jugador.posicion}</span>
                    </div>
                  </div>

                  {/* País */}
                  <div className="info-block">
                    <h3 className="info-titulo"><BiWorld /> País</h3>
                    <div className="pais-modal">
                      <img 
                        src={ganadorSeleccionado.pais.bandera}
                        alt={ganadorSeleccionado.pais.nombre}
                        className="bandera-modal"
                      />
                      <span className="pais-nombre-modal">{ganadorSeleccionado.pais.nombre}</span>
                    </div>
                  </div>

                  {/* Club */}
                  <div className="info-block">
                    <h3 className="info-titulo"><IoFootballOutline /> Club</h3>
                    <div className="club-modal">
                      <img 
                        src={ganadorSeleccionado.club.logo}
                        alt={ganadorSeleccionado.club.nombre}
                        className="club-logo-modal"
                      />
                      <div>
                        <p className="club-nombre-modal">{ganadorSeleccionado.club.nombre}</p>
                        <p className="club-pais-modal">{ganadorSeleccionado.club.Pais}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>  
          </div>
        </div>
      )}
    </div>
  );
}

export { GanadoresBalonDeOro }