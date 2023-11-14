'use client';

import React from "react";
import { ILembrete, LocalStorageHandler } from "../util/localStorageHandler";

interface IProps {
    oncreate: Function;
}

const Formulario: React.FC<IProps> = (props: IProps) =>{

    // função para guardar o lembrete à ser criado

    const handleSubmit = (event) => {
        
        event.preventDefault();
        
        const formData = new FormData(event.target);

        const localStorageHandler: LocalStorageHandler = new LocalStorageHandler();

        const lembretes = localStorageHandler.read();

        let novoDado: ILembrete = 
        {
         
            nome: formData.get("nome").toString(),
            data: new Date(formData.get("data").toString())
            
        }

        localStorageHandler.create(novoDado, formData.get("data").toString());
        props.oncreate(localStorageHandler.read());
    }

    // retorna formulário para novo lembrete

    return(
        <form onSubmit={handleSubmit}>
            <div className="mt-3">
                <span className="title font-bold text-lg">Nome do Lembrete</span>
                <input name="nome" type="text" placeholder="Nome do lembrete" className=" rounded-sm shadow-sm px-4 py-2 border border-gray-200 w-full mt-4" x-model="todoTitle" x-ref="addTask"/>
            </div>
        
            <div className="mt-3">
                <span className="title font-bold text-lg">Data do Lembrete</span>
                <input name="data" type="date" placeholder="Data do lembrete" className=" rounded-sm shadow-sm px-4 py-2 border border-gray-200 w-full mt-4" x-model="todoTitle" x-ref="addTask"/>
            </div>
            
            <div className="flex text-sm mt-2 w-full items-end">
                <button name="criar" value="criar" type="submit" className="py-1 mb-2 px-4 rounded text-white bg-blue-700">Criar</button>                   
            </div>
        </form>          
    )
    
}

export default Formulario;
