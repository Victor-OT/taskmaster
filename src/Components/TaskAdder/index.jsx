import { useContext, useState } from 'react'
import { TaskMasterContext } from '../../Context'
import './TaskAdder.css'

function TaskAdder () {
    const context = useContext(TaskMasterContext)
    const [textInput,setTextInput] = useState('')

    const getUserInput = (event) => {
        const userInput = event.target.value
        setTextInput(userInput)
    }

    const createTask = (textInput) => {
        const newTask = {task: textInput, completed: false}
        context.setTaskList([...context.taskList, newTask])
        context.closeTaskAdder()
        setTextInput('')
    }

    return (
        <div className={context.taskAdderStatus}>
            <img 
            src="/icon-close.svg" alt="close"
            className='close-adder' 
            onClick={() => context.closeTaskAdder()}/>
            <input type="text" name="text" className="task-adder-input" placeholder='Write a new task...'
            value={textInput}
            onChange={(event) => getUserInput(event)} />
            <button
            onClick={() => createTask(textInput)}>Create Task</button>
        </div>
    )
}

export {TaskAdder}