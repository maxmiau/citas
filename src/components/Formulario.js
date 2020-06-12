import React, { Fragment, useState } from 'react';

const Formulario = () => {

    // Crear el state de citas
    const [cita, actualizarCita] = useState ({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    //  Funcion que manejas los cambios en el input
    const handleChange = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraer valores del state
    const { mascota, propietario, fecha, hora, sintomas } = cita

    return ( 
        <Fragment>
            <h2>Crear cita</h2>

            <form>
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
 
export default Formulario;