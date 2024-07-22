import { useState, useContext } from 'react'
import { TaskMasterContext } from '../../Context'
import './TaskCard.css'

function TaskCard (props) {
    const context = useContext(TaskMasterContext)
    const [isTaskComplete, setIsTaskComplete] = useState(undefined)

    const setTaskStatus = () => {
        isTaskComplete === undefined ? setIsTaskComplete("completed-task")
        : setIsTaskComplete(undefined)
    }

    return (
        <div className={`task-card-container ${isTaskComplete}`}>
            <img 
                className="close-icon"
                src="/icon-close.svg" alt="close" />
            <p>{props.task}</p>
            <img
                className="check-icon" 
                src="/icon-check.svg" alt="check" 
                onClick={() => setTaskStatus()}/>
        </div>
    )
}

export {TaskCard}