import { v4 as uuidv4 } from 'uuid'
import { useState, createContext } from "react";

const TaskMasterContext = createContext()

const TaskMasterContextProvider = ({children}) => {
    //Task List to Show
    const tasks = [
        {id: uuidv4(), task: 'Hacer la tarea', completed: false},
        {id: uuidv4(), task: 'Estudiar para mi examen', completed: true},
        {id: uuidv4(), task: 'Terminar diseño de TaskMaster', completed: false}
      ]

    const [taskList, setTaskList] = useState(tasks)

    //Open -Close Task Adder
    const [taskAdderStatus, setTaskAdderStatus] = useState('inactive-task-adder')
    const openTaskAdder = () => {setTaskAdderStatus('task-adder-container')}
    const closeTaskAdder = () => {setTaskAdderStatus('inactive-task-adder')}

    return (
        <TaskMasterContext.Provider value={{
            tasks,
            taskList,
            setTaskList,
            taskAdderStatus,
            openTaskAdder,
            closeTaskAdder
        }}>
            {children}
        </TaskMasterContext.Provider>
    )
}

export {TaskMasterContext, TaskMasterContextProvider}