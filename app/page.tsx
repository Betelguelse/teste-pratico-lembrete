import Lembrete from "../components/lembrete";
import Formulario from "../components/formulario";
import { LocalStorageHandler, ILembrete } from "../util/localStorageHandler";
import TabelaLembretes from "../components/tabelaLembretes";


export default function Page() 
{

    return(
        <div className=" bg-gray-200 text-gray-800 flex items-center justify-center h-screen">
                      
            <div className="container px-3 max-w-md mx-auto">

                <span className="text-3xl font-bold">Novo Lembrete</span>

                <div className="bg-white rounded shadow px-4 py-1">

                    <section id="insercao">
                       <Formulario></Formulario>
                    </section>

                    <section id="visualizacao">
                        <TabelaLembretes></TabelaLembretes>                
                    </section>

                </div>

            </div>

        </div>                
      
    )
}