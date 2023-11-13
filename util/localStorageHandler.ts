'use client';

// definição de variáveis

export interface ILembrete{    
    nome: string;
    data: Date;
    id: Number;
}

// controle de CRUD

export class LocalStorageHandler{

    chave: string;
    lembretes: Map<string, ILembrete[]>;

    CHAVE_DADOS = "lembretes";

    // salvar lembretes criados
    
    salvarDados(novosLembretes: Map<string, ILembrete[]>){
        localStorage.setItem(this.chave, JSON.stringify(novosLembretes));
    }
    
    // criar novos lembretes

    create(lembrete: ILembrete, data: string){
        const lembretesAtuais: Map<string, ILembrete[]> = this.read();

        let lembretesData: ILembrete[] = [];
        
        if(lembretesAtuais.has(data)){
            lembretesData = lembretesAtuais.get(data);
        }

        this.salvarDados(lembretesAtuais);
    }

    // ler lembretes existentes 

    read(): Map<string, ILembrete[]>{
        let dadosString = localStorage.getItem(this.chave)

        if(dadosString == null || dadosString == ""){
            dadosString = "{}";
        }

        this.lembretes = JSON.parse(dadosString);

        return new Map(Object.entries(this.lembretes));
    }

    // update(){
    // }

    // deletar lembretes existentes

    // delete(id){
    //     let lembretesAtuais = this.read();

    //     lembretesAtuais = lembretesAtuais.filter(lembretes => id != lembretes.id);
    // }
}