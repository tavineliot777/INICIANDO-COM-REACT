
import { useState } from "react";

export default function FiltroTarefa({task}){

    const [mostrarInput,setMostrarInput] = useState(false);
    const [nomeFiltro,setNomeFiltro] = useState("");
    const [resultado,setResultado] = useState([]);


function filtrarPorNome(nome){
    const tarefa = task.filter((t) => t.nome.toLowerCase() === nome.toLowerCase());
    return tarefa;
}

function aplicarFiltro() {
    const res = filtrarPorNome(nomeFiltro);
    setResultado(res);
  }

function filtrarPorCategoria(categoria){
    const filtradas = task.filter(t => t.categoria.toLowerCase() === categoria.toLowerCase());

    return (
        <ul>{filtradas.map(t => (
        <li>{t.id} - {t.categoria}</li>

        ))}</ul>
    );
}    
  
     return(
         <div>

        <button onClick={() => setMostrarInput(true)} > Filtrar por nome</button>
        {mostrarInput && (
            <div>
                <input type="text"
                placeholder="Digite o nome"
                value={nomeFiltro}
                onChange={(e) => setNomeFiltro(e.target.value)}
                />

                <button onClick={aplicarFiltro}> filtrar </button>

            </div>
        )}

      <ul>{resultado.map(t => (
         
        <li key={t.id}> {t.id} - {t.nome}</li>

      ))}
      
      </ul>
        </div>
     )

}