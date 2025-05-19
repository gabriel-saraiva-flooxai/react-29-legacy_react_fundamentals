import React from "react";

import Filho from "./Filho";

export default props => {

    let lugarInformado = "Nenhum"
    const notificarSaidaDoFilho = lugar => {
        lugarInformado = lugar //alert(`Liberado para ${lugar}`)
        console.log(lugar);
    }

    return (
        <div>
            {lugarInformado}
            <Filho notificarSaida={notificarSaidaDoFilho} />
        </div>
    )
}