import React, { useState } from 'react';
import './ganadoresBalonDeOro.css';
import ganadoresData from '../../data/balon-oro.json'

function GanadoresBalonDeOro() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [ganadorSeleccionado, setGanadorSeleccionado] = useState(null);

  const abrirModal = (ganador) => {
    setGanadorSeleccionado(ganador);
    setModalAbierto(true);
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setGanadorSeleccionado(null);
    // Restaurar scroll del body
    document.body.style.overflow = 'unset';
  };

  // Cerrar modal con tecla ESC
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') cerrarModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="ganadores-container">
      <h1 className="titulo-principal">🏆 Ganadores del Balón de Oro</h1>
      
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
                    <h3 className="info-titulo">📋 Información Personal</h3>
                    <div className="info-item">
                      <span className="info-label">Nombre:</span>
                      <span className="info-valor">{ganadorSeleccionado.jugador.nombre}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Posición:</span>
                      <span className="info-valor">{ganadorSeleccionado.jugador.posicion}</span>
                    </div>
                  </div>

                  {/* País */}
                  <div className="info-block">
                    <h3 className="info-titulo">🌍 País</h3>
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
                    <h3 className="info-titulo">⚽ Club</h3>
                    <div className="club-modal">
                      <img 
                        src={ganadorSeleccionado.club.logo}
                        alt={ganadorSeleccionado.club.nombre}
                        className="club-logo-modal"
                      />
                      <div>
                        <p className="club-nombre-modal">{ganadorSeleccionado.club.nombre}</p>
                        <p className="club-pais-modal">{ganadorSeleccionado.club.pais}</p>
                      </div>
                    </div>
                  </div>

                  {/* Estadísticas */}
                  <div className="info-block">
                    <h3 className="info-titulo">📊 Estadísticas {ganadorSeleccionado.año}</h3>
                    <div className="estadisticas-grid">
                      <div className="stat-card">
                        <span className="stat-icon">⚽</span>
                        <span className="stat-numero">{ganadorSeleccionado.estadisticas.goles}</span>
                        <span className="stat-label">Goles</span>
                      </div>
                      <div className="stat-card">
                        <span className="stat-icon">🎯</span>
                        <span className="stat-numero">{ganadorSeleccionado.estadisticas.asistencias}</span>
                        <span className="stat-label">Asistencias</span>
                      </div>
                      <div className="stat-card">
                        <span className="stat-icon">👕</span>
                        <span className="stat-numero">{ganadorSeleccionado.estadisticas.partidosJugados}</span>
                        <span className="stat-label">Partidos</span>
                      </div>
                    </div>
                  </div>

                  {/* Logros */}
                  <div className="info-block">
                    <h3 className="info-titulo">🏅 Logros Destacados</h3>
                    <ul className="logros-lista">
                      {ganadorSeleccionado.logros.map((logro, index) => (
                        <li key={index} className="logro-item">
                          <span className="logro-bullet">✓</span>
                          {logro}
                        </li>
                      ))}
                    </ul>
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