import React, { useState, useEffect } from "react";

export default props => {
    
    const [contador, setContador] = useState(100)
    const [status, setStatus] = useState('Par')

    useEffect(() => {
        contador % 2 === 0 ? setStatus('Par') : setStatus('Ímpar')
    })
    
    return (
        <div>
            <h3>{contador}</h3>
            <h3>{status}</h3>
            <button onClick={() => setContador(contador + 1)}>Inc</button>
            <button onClick={() => setContador(contador - 1)}>Dec</button>
        </div>
    )

}