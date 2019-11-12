import React from 'react'

import './styles/PageError.css'

function PageError (props) {
    return (
        <span  className="PageError">
            ❌{props.error.message}😩 <br/>
            No te preocupes puedes retornar a la pagina principal
        </span>
    )
}

export default  PageError