import React, { useState } from 'react';
import Error from './Error'


const Formulario = ({guardarBusqueda}) => {

    const [termino, guardarTermino] = useState('')
    const [error, guardarError] = useState(false)

    const buscarImagenes = e => {
        e.preventDefault();

        //validar 
        if( termino.trim() === '') {
            guardarError(true)
            return
        }

        guardarError(false)

        // enviarlo la busqueda al componente principal
        guardarBusqueda(termino)
    }

    return (

        <form
            onSubmit={buscarImagenes}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Buscar una imagen"
                        onChange={ e => guardarTermino(e.target.value)}
                    />
                </div>

                <div className="form-group col-md-8">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger"
                        placeholder="Buscar una imagen"
                        value="Buscar"
                    />
                </div>
            </div>

            { error ? <Error mensaje="Debe agregar una busqueda" /> : null}
        </form>
    );
}

export default Formulario;