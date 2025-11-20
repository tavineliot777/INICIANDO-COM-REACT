import { useState } from "react";

export default function FormNovaTarefa(){

    const [nome, setNome] = useState("");
    const [categoria, setCategoria] = useState("Estudo");


    function handleSubmit(e){
        e.preventDefault()
    
        if(nome.trim() === ""){
            alert("O nome não pode ser vazio!");
            return;
        }

        const novaTarefa = {
       id : Date.now(),
       nome,
       categoria,
       concluida : false
        }

        onAdd(novaTarefa);
        setNome("");
        setCategoria("Estudo");
    };
    
  return (
    <form onSubmit={handleSubmit} className="form-tarefa">
        <input type="text" 
        placeholder="Digite a tarefa..."
        value={nome}
        onChange={(e) => setNome(e.target.value)} 
        />
        
      <select 
      value={categoria}
      onChange={(e) => setCategoria(e.target.value)}
      >
      <option value={"Estudo"} > Estudo</option>
      <option value ={"Casa"} > Casa</option>
      <option value = {"Trabalho"} > Trabalho</option>
      </select>
     
    <button type="Submit"> Adicionar</button>

    </form>
   
   
);
    

}