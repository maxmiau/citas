import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {
  // Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales) {
    citasIniciales = []
  }

  // Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales)

  // UseEffect que maneja operaciones 
  useEffect (() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'))

    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify())
    }
  }, [citas]) // Arreglo que indica que cambia

  // Funcion que maneja las citas guardadas
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }

  // Funcion que elimina las citas
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    guardarCitas(nuevasCitas)
  }

  // Mensajes condicionales para cita
  const titulo = citas.length === 0 ?'No existen citas'    : 'Administra tus citas'

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita 
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
