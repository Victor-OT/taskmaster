import { useContext } from 'react'
import { TaskMasterContext } from '../../Context'
import './TaskAdder.css'

function TaskAdder () {
    const context = useContext(TaskMasterContext)
    return (
        <div className={context.taskAdderStatus}>
            <img 
            src="/icon-close.svg" alt="close"
            className='close-adder' 
            onClick={() => context.closeTaskAdder()}/>
            <input type="text" name="text" className="task-adder-input" placeholder='Write a new task...' />
            <button>Create Task</button>
        </div>
    )
}

export {TaskAdder}