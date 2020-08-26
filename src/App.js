import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import ListaImagenes from './components/ListaImagenes'

function App() {

  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaactual, guardarPaginaActual] = useState(1)
  const [totalpaginas, guardarTotalPaginas] = useState(1)

  useEffect(() => {
    const consultar = async () => {
      if (busqueda === '') return

      const imagenesPorPagina = 30;
      const apiKey = "18046021-77b27cb1b5b5b3a45798a92ee";

      const url = `https://pixabay.com/api/?key=${apiKey}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactual}`

      const response = await fetch(url);
      const resultado = await response.json()

      guardarImagenes(resultado.hits)

      // calcular el total de pagina+
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina)
      guardarTotalPaginas(calcularTotalPaginas);

      const jumbotron = document.querySelector('.jumbotron');
        jumbotron.scrollIntoView({ behavior: 'smooth' })
    }
    consultar();
  }, [busqueda, paginaactual])


  // evento del boton pagina anterior

  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1;

    if (nuevaPaginaActual === 0) return;

    guardarPaginaActual(nuevaPaginaActual);
  }

  //evento del boton pagina siguiente

  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual + 1;

    if (nuevaPaginaActual > totalpaginas) return;

    guardarPaginaActual(nuevaPaginaActual);
  }

  return (

    <div className="container">
      <div className="jumbotron">
        <p className="lead">Buscador de imágenes</p>

        <Formulario
          guardarBusqueda={guardarBusqueda}
        />
      </div>
      <div className="row justify-content-center">
        <ListaImagenes
          imagenes={imagenes}
        />
      </div>

      <div className="container text-center mb-10">
      {(paginaactual === 1) ? null : (
          <button
            type="button"
            className="btn btn-info mr-2"
            onClick={paginaAnterior}
          >&laquo; Anterior</button>
        )}

        {(paginaactual === totalpaginas) ? null : (
          <button
            type="button"
            className="btn btn-info"
            onClick={paginaSiguiente}
          >Siguiente &raquo;</button>
        )}
      </div>
    </div>
  );
}

export default App;
