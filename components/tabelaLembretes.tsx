'use client';

import React, { useEffect, useState } from "react";
import Lembrete from "../components/lembrete";
import { LocalStorageHandler, ILembrete } from "../util/localStorageHandler";

// aplicação para exbição da lista de lembretes

const TabelaLembretes: React.FC = (props) =>{

    // função para exibir a lista de lembretes
  
    const [lembretesTratados, setLembretesTratados] = useState([]);

    useEffect(() => 
    {
        const localStorageHandler: LocalStorageHandler = new LocalStorageHandler();

        const lembretes = localStorageHandler.read();

        let lembretesTratadosAux = [];

        lembretes.forEach((lembretes, data) => {lembretesTratadosAux.push([data, lembretes])});

        setLembretesTratados(lembretesTratadosAux);
    })

    // retorna a lista de lembretes

    return(
        <div>
            <span className="title font-bold text-lg">Lista de Lembrete</span>

            {lembretesTratados.map(v => {
                return v[1].map((lembrete: ILembrete) => {
                    return <Lembrete name={lembrete.nome} completed="true"></Lembrete>
                })
            } ) }

            {/* {(lembretesTratados.map).map((lembrete) => <Lembrete name={lembrete.nome} completed="true"></Lembrete>)} */}
            
        </div>
       
    )
    
}

export default TabelaLembretes;
