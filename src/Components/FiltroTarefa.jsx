
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
         <div className="">

        <button onClick={() => setMostrarInputNome(true)} > Filtrar por nome</button>
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

        <button onClick={() => setMostrarInputCategoria(true)}> Filtrar por categoria</button>
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

      <ul className="bg-amber-700">{resultado.map(t => (
         
        <li className="bg-black" key={t.id}> {t.id} - {t.nome} - {t.categoria}</li>

      ))}
      
      </ul>
        </div>
     )

}