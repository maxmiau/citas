import React, { Fragment } from 'react';

const Formulario = () => {
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
                />

                <label>Nombre del dueño</label>
                <input 
                    type = "text"
                    name = "Dueño"
                    className = "u-full-width"
                    placeholder = "Nombre del dueño de la mascota"
                />

                <label>Fecha</label>
                <input 
                    type = "date"
                    name = "fecha"
                    className = "u-full-width"
                />

                <label>Hora</label>
                <input 
                    type = "time"
                    name = "hora"
                    className = "u-full-width"
                />

                <label>Sintomas</label>
                <textarea
                    className = "u-full-width"
                    name = "sintomas"
                    placeholder = "Indique los sintomas que presenta la mascota"
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