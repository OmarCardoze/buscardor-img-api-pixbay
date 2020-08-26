import React from 'react';
import Imagen from './Imagen'


const ListaImagenes = ({imagenes}) => {
    return ( 
       <>
        {imagenes.map(imagen => (
            <Imagen 
                key={imagen.id}
                imagen={imagen}
            />
        ))}
       </>
     );
}
 
export default ListaImagenes;