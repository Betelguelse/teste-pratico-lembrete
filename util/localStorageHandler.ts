'use client';

// definição de variáveis

export interface ILembrete{    
    nome: string;
    data: Date;
    id?: number;
}

// controle de CRUD

export class LocalStorageHandler{

    chave: string;
    // CONSIDERANDO QUE O ID É CONTROLADO APENAS PELO USUÁRIO (NÃO É POSSÍVEL UMA ALTERAÇÃO DE ID QUE NÃO SEJA POR AÇÃO DO USUÁRIO DESTE BROWSER, podemos armazenar o Id no cache sem preocupação de algo ser inserido com o próximo id antes deste id ser utilizado)
    private ultimoId: number;

    CHAVE_DADOS = "lembretes";

    obterUltimoId(){
        const lembretesAtuais = this.read();
        
        if(this.ultimoId !== undefined){
            return this.ultimoId;
        }

        let ultimoId: number;

        lembretesAtuais.forEach((lembretes: ILembrete[]) => {
            lembretes.forEach(lembrete => {
                if(lembrete.id > ultimoId){
                    ultimoId = lembrete.id;
                }
            })
        });
        
        this.ultimoId = ultimoId;
        return ultimoId;
    }

    // salvar lembretes criados
    
    salvarDados(novosLembretes: Map<string, ILembrete[]>){
        localStorage.setItem(this.CHAVE_DADOS, JSON.stringify(Object.fromEntries(novosLembretes)));
    }
    
    // criar novos lembretes

    create(lembrete: ILembrete, data: string){
        const lembretesAtuais: Map<string, ILembrete[]> = this.read();

        let lembretesData = [];
        
        if(lembretesAtuais.has(data)){
            lembretesData = lembretesAtuais.get(data);
        }
        lembrete.id = this.obterUltimoId() + 1;
        lembretesData.push(lembrete);
        lembretesAtuais.set(data, lembretesData);
        console.log(lembretesAtuais);
        this.salvarDados(lembretesAtuais);
    }

    // ler lembretes existentes 

    read(): Map<string, ILembrete[]>{
        let dadosString = localStorage.getItem(this.chave)

        if(dadosString == null || dadosString == ""){
            dadosString = "{}";
        }

        const lembretes = JSON.parse(dadosString);

        return new Map(Object.entries(lembretes));
    }

    // update(){
    // }

    // deletar lembretes existentes

    // delete(id){
    //     let lembretesAtuais = this.read();

    //     lembretesAtuais = lembretesAtuais.filter(lembretes => id != lembretes.id);
    // }
}