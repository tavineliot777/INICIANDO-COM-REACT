import { useState } from "react"
import ListaTarefas from "./Components/ListaTarefas";
import AdicionarTarefa from "./Components/AdicionarTarefa";
import './App.css'
import FiltroTarefa from "./Components/FiltroTarefa";


export default function App(){

   const [task, setTask] = useState([
    { id: 1, nome: "Estudar", categoria: "Pessoal" , concluida : false},
    { id: 2, nome: "Treinar React", categoria: "Programação", concluida : false},
    { id : 3, nome: "Trabalhar" , categoria: "Trabalho", concluida : false},
    { id : 4, nome : "jogar", categoria: "Passatempo", concluida: false}
  ]);

  function MarcarConcluida(id) {
  const novaLista = task.map(t =>
    t.id === id ? {...t, concluida: true} : t
  );

  setTask(novaLista);
}


  function removerTarefa(id){

   setTask(task.filter(t => t.id !== id));

  }

 function addNewTask(nome,categoria){

    const novaT = AdicionarTarefa(nome,categoria);
 
   setTask([...task,novaT]);
  
  }
  


 return(

    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
    <div className="w-[500px]">
    <h1 className="text-blue-100 text-3xl font-bold text-center" >Gerenciador de Tarefas</h1>
     <ListaTarefas task={task} onRemover={removerTarefa} onConcluir={MarcarConcluida}/>
     <AdicionarTarefa onAdd={addNewTask} />
     <FiltroTarefa />
 
    </div>
    </div>
    
  );

}