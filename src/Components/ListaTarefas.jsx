import Tarefa from "./Tarefa";

export default function ListaTarefas({task,onConcluir,onRemover}){

 return(
  <ul className="space-y-2">{task.map((t) => (

  <Tarefa key={t.id} task={t} onConcluir={onConcluir} onRemover={onRemover}

  />
  ))}
  
  </ul>
 )
}