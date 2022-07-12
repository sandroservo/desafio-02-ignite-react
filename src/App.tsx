import { useState } from "react"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"


export interface ITask{
  id: string;
  title: string;
  isCompleted: boolean;
}


function App() {


  const [tasks, setTasks] = useState<ITask[]>([])

  function addTask(taskTitle: string){
    setTasks([
      ...tasks,
      {
        id:crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false, 
      }
    ])
  }

  function deleteTaskById(taskId: string){
    const newTask = tasks.filter((task) => task.id !== taskId)
    setTasks(newTask);
}

function toggleTaskCompletedById(taskId: string){
  const newTasks = tasks.map((task) => {
    if(task.id === taskId){
return{
  ...task,
  isCompleted: !task.isCompleted,
}
    }
    return task
  });
  setTasks(newTasks);
}

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTaskById} onCompleted={toggleTaskCompletedById}/>
    </>
  )
}

export default App
