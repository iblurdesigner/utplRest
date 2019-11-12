import React from 'react'

import './styles/PageError.css'

function PageError (props) {
    return (
        <div  className="PageError">
            ❌{props.error.message}😩 <br/>
            No te preocupes puedes retornar a la pagina principal
        </div>
    )
}

export default  PageError