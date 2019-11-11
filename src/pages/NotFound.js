import React from 'react'
import { Link } from 'react-router-dom'

function NotFound () {
    return (
        <div className="container-fluid">
            <h1>404: Not Found</h1>
            <p>No hemos encontrado contenido en la ruta que elegiste</p>
            <Link to="/badges/new">
                Regresar a la pagina principal
            </Link>
        </div>
    )
}

export default NotFound