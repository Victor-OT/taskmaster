import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='global-app'>
      <header>
          <h1>TaskMaster</h1>
          <h2>Organize tasks efficiently</h2>
        </header>
      <input type='text' name='text' className='search-bar' placeholder='Enter task name...'/>
      <div className='tasks-container'>

      </div>
      <div className='add-task-container'>
        <button>Add Task</button>
      </div>
    </div>
  )
}

export default App
