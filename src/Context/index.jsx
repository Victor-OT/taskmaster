import { useState, createContext } from "react";

const TaskMasterContext = createContext()

const TaskMasterContextProvider = ({children}) => {
    const tasks = [
        {task: 'Hacer la tarea'},
        {task: 'Estudiar para mi examen'},
        {task: 'Terminar diseño de TaskMaster'},
        {task: 'Hacer Ejercicio'},
      ]

    const [taskList, setTaskList] = useState(tasks)

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