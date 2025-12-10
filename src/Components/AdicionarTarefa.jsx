import { ArrowUp, Plus } from "lucide-react";
import { useState } from "react";

export default function AdicionarTarefa(props){

    const [nome,setNome] = useState("");
    const [categoria,setCategoria] = useState("");
   

    function handleSubmit(e){
        e.preventDefault();
        props.addNewTask(nome,categoria);
        setNome("");
        setCategoria("");

    }

return (

  
  <form className = "bg-slate-200 rounded-md mt-1"onSubmit={handleSubmit} > 

  <h1 className="text-center bg-slate-400 text-white font-medium">Adicionar Tarefa</h1>
  
  <input className = "bg-slate-400 m-2 text-white rounded-md text-center outline-slate-500"type="text"
  placeholder="Nome da Tarefa"
  value={nome}
  onChange={(e) => setNome(e.target.value)}
  />
  
  <input className="bg-slate-400 m-2 text-white rounded-md text-center outline-slate-500" type="text"
  placeholder = "Nome da categoria"
  value={categoria}
  onChange={(e) => setCategoria(e.target.value)}
  />

   <button
  className="bg-slate-400 text-white rounded-md font-medium p-1 mt-1.5"
  type="submit"
>
  Adicionar
</button>

 {props.erro && (<div> <li ><button className=" bg-black text-red-500 w-fit p-1"><ArrowUp/></button> <button className="bg-black text-red-500 font-medium border-red-500 rounded-md p-1 "  >  {props.erro} </button> </li> </div>
)}
 


  </form>



)

}