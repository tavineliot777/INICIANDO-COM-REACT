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

   const [erro,setErro] = useState("");

  function MarcarConcluida(id) {
  const novaLista = task.map(t =>
    t.id === id ? {...t, concluida: !t.concluida} : t
  );

  setTask(novaLista);
}

function filtrarPorNome(nome){
    const tarefa = task.filter((t) => t.nome.toLowerCase() === nome.toLowerCase());
    return tarefa;
}

function filtrarPorCategoria(categoria){
    const filtradas = task.filter(t => t.categoria.toLowerCase() === categoria.toLowerCase());

    return (
        <ul>{filtradas.map(t => (
        <li>{t.id} - {t.categoria}</li>

        ))}</ul>
     );
}   



  function removerTarefa(id){

   setTask(task.filter(t => t.id !== id));

  }

 function addNewTask(nome,categoria){

    const novaT = {
      id : Date.now(),
      nome : nome,
      categoria : categoria,
      concluida : false
    };

    if( !novaT.nome || !novaT.categoria){
         setErro("Preencha todos os campos!");
            return;   
    }
 
   setTask([...task,novaT]);
   setErro("");
  
  }
  


 return(

    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
    
    <div className="w-[500px] space-y-4">

    <h1 className="text-blue-100 text-3xl font-bold text-center" >Gerenciador de Tarefas</h1>
     <ListaTarefas task={task} onRemover={removerTarefa} onConcluir={MarcarConcluida}/>
     <AdicionarTarefa addNewTask={addNewTask} erro={erro}/>
    
     <FiltroTarefa filtrarPorNome={filtrarPorNome} filtrarPorCategoria={filtrarPorCategoria}/>
 
    </div>
    </div>
    
  );

}