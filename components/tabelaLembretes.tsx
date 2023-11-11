'use client';
import React, { useEffect } from "react";
import Lembrete from "../components/lembrete";
import { LocalStorageHandler, ILembrete } from "../util/localStorageHandler";


const TabelaLembretes: React.FC = (props) =>{
    useEffect(() => 
    {
        const localStorageHandler: LocalStorageHandler<ILembrete> = new LocalStorageHandler("lembretes");

        const lembretes = localStorageHandler.read();

        console.log(lembretes);
    })
    return(
        <div>
            <span className="title font-bold text-lg">Lista de Lembrete</span>
            {/* {lembretes.map(lembrete => <Lembrete name={lembrete.nome} completed="true"></Lembrete>)} */}

        </div>
       
    )
    
}

export default TabelaLembretes;
