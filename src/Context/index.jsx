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
    return (
        <TaskMasterContext.Provider value={{
            tasks,
            taskList,
            setTaskList
        }}>
            {children}
        </TaskMasterContext.Provider>
    )
}

export {TaskMasterContext, TaskMasterContextProvider}