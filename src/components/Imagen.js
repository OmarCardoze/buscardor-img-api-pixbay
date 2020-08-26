import React from 'react';

const Imagen = ({ imagen }) => {

    const { largeImageURL, likes, previewURL, tags, views } = imagen;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
            <div className="card">
               <a href={largeImageURL} target="_blank" rel="noopener noreferrer"><img src={previewURL} alt={tags} className="card-img-top" /></a>
                
                <div className="card-body">
                    <p className="card-text">{likes} Me gustas</p>
                    <p className="card-text">{views} Vistas</p>
                </div>

                <div className="card-footer">
                    <a 
                        href={largeImageURL}
                        target="_blank"
                        className="btn btn-primary btn-block"
                        rel="noopener noreferrer" 
                    >Ver Imagen en alta resolución</a>
                </div>
            </div>
        </div>
    );
}

export default Imagen;