import { useState } from "react"
import "./campo.css"
const Campo = (props) => {
    const placeholderModificador = `${props.placeholder}...`
    const { type = "text"} = props
    const manejarCamcio = (e) => {
            props.actualizarValor(e.target.value)
    }
    return <div className={`campo campo-${type}`}>
        <label>
            {props.titulo}
        </label>
        <input
            placeholder={placeholderModificador}
            required={props.required}
            value={props.valor}
            onChange={manejarCamcio}
            type={props.type}
        />
    </div>

}

export default Campo;