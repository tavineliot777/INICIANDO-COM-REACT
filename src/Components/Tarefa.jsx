export default function Tarefa({task,onRemover,onConcluir}){

return (

<li className= "bg-slate-300 text-white p-2 rounded-md">
    
    {task.concluida ? "Tarefa concluida" : "Tarefa"}

  <strong>{task.nome}</strong> - {task.categoria}

<button onClick={() => onRemover(task.id)}> Remover</button>
<button onClick={() => onConcluir(task.id)}> Concluir</button>

</li>

);

}