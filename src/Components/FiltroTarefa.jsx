
import { useState } from "react";

export default function FiltroTarefa(props){

    const [mostrarInputNome,setMostrarInputNome] = useState(false);
    const [mostrarInputCategoria,setMostrarInputCategoria] = useState(false);
    const [nomeFiltro,setNomeFiltro] = useState("");
    const [categoriaFiltro,setCategoriaFiltro] = useState("");
    const [resultado,setResultado] = useState([]);


    
function aplicarFiltroNome() {
    const res = props.filtrarPorNome(nomeFiltro);
    setResultado(res);
  }

  function aplicarFiltroCategoria(){
    const res = props.filtrarPorCategoria(categoriaFiltro);
    setResultado(res);
  }
  
     return(
         
         <div>

         <h1 className="bg-slate-400 text-center font-medium text-white">Filtro</h1>

         <div className="bg-slate-200 flex flex-col">
        
         

        <button className = "pr-2 text-center p-1 text-white border-white border-solid mr-6 ml-6 m-2 bg-slate-400 rounded-md"onClick={() => setMostrarInputNome(true)} > Filtrar por nome</button>
        {mostrarInputNome && (
            <div>
                <input type="text"
                placeholder="Digite o nome"
                value={nomeFiltro}
                onChange={(e) => setNomeFiltro(e.target.value)}
                />

                <button onClick={aplicarFiltroNome}> filtrar </button>

            </div>
        )}

        <button className="text-center text-white p-1 border-white border-solid bg-slate-400 rounded-md ml-6 mr-6 m-2"onClick={() => setMostrarInputCategoria(true)}> Filtrar por categoria</button>
        {mostrarInputCategoria && (

          <div>
            <input type="text"
            placeholder="Digite a categoria"
            value={categoriaFiltro}
            onChange={(e) => setCategoriaFiltro(e.target.value)}
            />

            <button onClick={aplicarFiltroCategoria}> Filtrar</button>
          </div>

        )}
      
      <div className=" h-auto">
      <ul className="bg-slate-200">{resultado.map(t => (
         
        <li className="bg-black border-b-amber-50 border border-solid rounded-md text-white" key={t.id}> {t.id} - {t.nome} - {t.categoria}</li>

      ))}
      
      </ul>
      </div>
        </div>
        </div>
     )
     
}