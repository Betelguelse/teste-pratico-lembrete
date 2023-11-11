'use client';

export interface ILembrete extends ISalvavel{
    
    nome: string;
    data: Date;
}

interface ISalvavel{
    id:  Number;
}

export class LocalStorageHandler<T extends ISalvavel>{

    chave: string;
    dados: T[];


    constructor(chave){
        this.chave = chave;
        
    }
    
    salvarDados(novosDados: T[]){
        localStorage.setItem(this.chave, JSON.stringify(novosDados));
    }
    
    create(dado: T){
        const dadosAtuais = this.read();
        dadosAtuais.push(dado);
        this.salvarDados(dadosAtuais);
    }

    read(): T[]{
        let dadosString = localStorage.getItem(this.chave)
        if(dadosString == null || dadosString == ""){
            dadosString = "[]";
        }
        this.dados = JSON.parse(dadosString);
        return this.dados;
    }

    // update(){
    // }

    delete(id){
        let dadosAtuais = this.read();
        dadosAtuais = dadosAtuais.filter(dado => id != dado.id);
    }
}