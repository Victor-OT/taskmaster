import { useState, useContext } from 'react'
import { TaskMasterContext } from '../../Context'
import './TaskCard.css'

function TaskCard (task) {
    const context = useContext(TaskMasterContext)
    const [isTaskComplete, setIsTaskComplete] = useState(undefined)

    const setTaskStatus = () => {
        isTaskComplete === undefined ? setIsTaskComplete("completed-task")
        : setIsTaskComplete(undefined)
    }

    const deleteTask = (task) => {
        const indexToDelete = context.taskList.indexOf(task.task)
        const updatedTasks = [...context.taskList]
        updatedTasks.splice(indexToDelete, 1)
        context.setTaskList(updatedTasks)
    }
    return (
        <div className={`task-card-container ${isTaskComplete}`}>
            <img 
                className="close-icon"
                src="/icon-close.svg" alt="close" 
                onClick={() => deleteTask(task)}/>
            <p>{task.taskContent}</p>
            <img
                className="check-icon" 
                src="/icon-check.svg" alt="check" 
                onClick={() => setTaskStatus()}/>
        </div>
    )
}

export {TaskCard}