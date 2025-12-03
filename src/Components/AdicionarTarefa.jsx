import { useState } from "react";

export default function AdicionarTarefa({addNewTask}){

    const [nome,setNome] = useState("");
    const [categoria,setCategoria] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        addNewTask(nome,categoria);
        setNome("");
        setCategoria("");

    }

return (

  <form onSubmit={handleSubmit} > 
  
  <input type="text"
  placeholder="Nome da Tarefa"
  value={nome}
  onChange={(e) => setNome(e.target.value)}
  />
  
  <input type="text"
  placeholder="Nome da categoria"
  value={categoria}
  onChange={(e) => setCategoria(e.target.value)}
  />

   <button type="submit"> Adicionar </button>

  </form>



)

}