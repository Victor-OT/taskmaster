import { useState, useContext } from 'react'
import { TaskMasterContext } from '../../Context'
import './TaskCard.css'

function TaskCard (task) {
    const context = useContext(TaskMasterContext)
    const [isTaskComplete, setIsTaskComplete] = useState(undefined)

    const setTaskStatus = (task) => {
        const indexCompleted = context.taskList.indexOf(task.task)
        let updatedTasks = [...context.taskList]
        const completedTask = {task: task.taskContent, completed: true}
        updatedTasks[indexCompleted] = completedTask
        context.setTaskList(updatedTasks)
    }

    const deleteTask = (task) => {
        const indexToDelete = context.taskList.indexOf(task.task)
        const updatedTasks = [...context.taskList]
        updatedTasks.splice(indexToDelete, 1)
        context.setTaskList(updatedTasks)
    }
    return (
        <div className={`task-card-container ${task.task.completed ? 'completed-task' : undefined}`}>
            <img 
                className="close-icon"
                src="/icon-close.svg" alt="close" 
                onClick={() => deleteTask(task)}/>
            <p>{task.taskContent}</p>
            <img
                className="check-icon" 
                src="/icon-check.svg" alt="check" 
                onClick={() => setTaskStatus(task)}/>
        </div>
    )
}

export {TaskCard}