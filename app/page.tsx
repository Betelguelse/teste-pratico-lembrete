export default function Page() 
{
    return(
        <div>
            
            
            <body className=" bg-gray-200 text-gray-800 flex items-center justify-center h-screen">
                
                <div className="container px-3 max-w-md mx-auto">
                    <h1 className="text-3xl font-bold">
                        Novo Lembrete
                    </h1>
                    <div className="bg-white rounded shadow px-4 py-4" x-data="app()">
                        <div className="title font-bold text-lg">Nome do Lembrete</div>

                        <input type="text" placeholder="Nome do lembrete" className=" rounded-sm shadow-sm px-4 py-2 border border-gray-200 w-full mt-4" x-model="todoTitle" x-ref="addTask"/>

                        <div className="title font-bold text-lg">Data do Lembrete</div>

                        <input type="date" placeholder="Data do lembrete" className=" rounded-sm shadow-sm px-4 py-2 border border-gray-200 w-full mt-4" x-model="todoTitle" x-ref="addTask"/>

                        <div className="flex items-center text-sm mt-2">
                            <button type="submit" className="py-1 mb-2 px-4 rounded text-white bg-blue-700">Criar</button>
                            
                        </div>
                    </div>
                </div>
        
            </body>
        </div>                
                            

        
        
    )
}