import { Check, CheckCheck, DeleteIcon, Trash } from "lucide-react";

export default function Tarefa({task,onRemover,onConcluir}){

return (

<li className= "flex gap-2">
    
   <button className={task.concluida ? "bg-green-400 text-white rounded-md p-2" : ""}> {task.concluida && ( <CheckCheck /> )}</button>

 <button className={`bg-slate-400 text-white p-2 rounded-md w-full ${task.concluida === true ? "line-through" : "" }`}> <strong>{task.nome}</strong> - {task.categoria}</button>

<button className="bg-slate-400 text-white p-2 rounded-md" onClick={() => onRemover(task.id)}> <DeleteIcon/> </button>
<button className="bg-slate-400 text-white p-2 rounded-md" onClick={() => onConcluir(task.id)}> <Check /></button>

</li>

);

}