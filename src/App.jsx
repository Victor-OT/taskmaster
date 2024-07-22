import { v4 as uuidv4 } from 'uuid'
import { useContext, useState } from 'react'
import { TaskMasterContext } from './Context'
import { TaskCard } from './Components/TaskCard'
import { TaskAdder } from './Components/TaskAdder'
import './App.css'

function App() {
  const context = useContext(TaskMasterContext)
  const [searchInput, setSearchInput] = useState('')
  
  return (
    <div className='global-app'>
        <header>
          <h1>TaskMaster</h1>
          <h2>Organize tasks efficiently</h2>
        </header>
        <input type='text' name='text' className='search-bar' placeholder='Enter task name...'
        onChange={(event) => setSearchInput(event.target.value)}/>
        <div className='tasks-container'>
          {
            context.taskList?.filter(task => task.task.toLowerCase().includes(searchInput.toLocaleLowerCase())).map(task => (
              <TaskCard
                key={uuidv4()}
                task={task}
                taskContent={task.task}/>
            ))
          }
        </div>
        <div className='add-task-container'>
          <button
          onClick={() => context.openTaskAdder()}>Add Task</button>
        </div>
          <TaskAdder />
      </div>
  )
}

export default App
