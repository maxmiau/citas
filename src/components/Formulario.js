import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4'
import PropTypes from 'prop-types'

const Formulario = ({crearCita}) => {

    // Crear el state de citas
    const [cita, actualizarCita] = useState ({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    // Funcion para avisar errores al usuario
    const [ error, actualizarError ] = useState(false)

    //  Funcion que manejas los cambios en el input
    const handleChange = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraer valores del state
    const { mascota, propietario, fecha, hora, sintomas } = cita

    // Cuando el usuario guarda el formulario
    const submitCita = e => {
        e.preventDefault()

        // Validacion de inputs
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || 
        hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true)
            return
        }

        // Eliminar mensaje de error si todo esta bien
        actualizarError(false)

        // Crear ID unico
        cita.id = uuid()
        
        // Creando cita
        crearCita(cita)

        // Reiniciar el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })


    }

    return ( 
        <Fragment>
            <h2>Crear cita</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios*</p> : null}

            <form
                onSubmit = { submitCita }
            >
                <label>Nombre de la mascota</label>
                <input 
                    type = "text"
                    name = "mascota"
                    className = "u-full-width"
                    placeholder = "Nombre mascota"
                    onChange = {handleChange}
                    value = {mascota}
                />

                <label>Nombre del dueño</label>
                <input 
                    type = "text"
                    name = "propietario"
                    className = "u-full-width"
                    placeholder = "Nombre del dueño de la mascota"
                    onChange = {handleChange}
                    value = {propietario}
                />

                <label>Fecha</label>
                <input 
                    type = "date"
                    name = "fecha"
                    className = "u-full-width"
                    onChange = {handleChange}
                    value = {fecha}
                />

                <label>Hora</label>
                <input 
                    type = "time"
                    name = "hora"
                    className = "u-full-width"
                    onChange = {handleChange}
                    value = {hora}
                />

                <label>Sintomas</label>
                <textarea
                    className = "u-full-width"
                    name = "sintomas"
                    placeholder = "Indique los sintomas que presenta la mascota"
                    onChange = {handleChange}
                    value = {sintomas}
                ></textarea>

                <button
                    type = "submit"
                    className = "u-full-width button-primary"
                >Crear cita</button>
            </form>
        </Fragment>    
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;