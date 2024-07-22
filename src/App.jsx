import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { TaskCard } from './Components/TaskCard'
import './App.css'

function App() {
  const tasks = [
    {task: 'Hacer la tarea'},
    {task: 'Estudiar para mi examen'},
    {task: 'Terminar diseño de TaskMaster'},
    {task: 'Hacer Ejercicio'},
  ]
  const [taskList, setTaskList] = useState(tasks)
  return (
    <div className='global-app'>
      <header>
          <h1>TaskMaster</h1>
          <h2>Organize tasks efficiently</h2>
        </header>
      <input type='text' name='text' className='search-bar' placeholder='Enter task name...'/>
      <div className='tasks-container'>
        {
          taskList?.map(task => (
            <TaskCard
              key={uuidv4()} 
              task={task.task}/>
          ))
        }
      </div>
      <div className='add-task-container'>
        <button>Add Task</button>
      </div>
    </div>
  )
}

export default App
