import Tarefa from "./Tarefa";

export default function ListaTarefas({task,onConcluir,onRemover}){

 return(
  <ul className="space-y-5 p-6 bg-slate-200 rounded-md shadow margin-bottom mt-3">{task.map((t) => (

  <Tarefa key={t.id} task={t} onConcluir={onConcluir} onRemover={onRemover}

  />
  ))}
  
  </ul>
 )
}