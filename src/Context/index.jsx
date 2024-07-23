import { v4 as uuidv4 } from 'uuid'
import { useState, createContext, useEffect, useRef } from "react";

const TaskMasterContext = createContext()

const TaskMasterContextProvider = ({children}) => {
    //Task List to Show
    const tasks = [
        {id: uuidv4(), task: 'Hacer la tarea', completed: false},
        {id: uuidv4(), task: 'Estudiar para mi examen', completed: true},
        {id: uuidv4(), task: 'Terminar diseño de TaskMaster', completed: false}
      ]

    const [taskList, setTaskList] = useState([])

    //Data Persistence
    const taskListRef = useRef(taskList)
    useEffect(() => {
        taskListRef.current = taskList
    }, [taskList])

    useEffect(() => {
        const parsedTaskList = JSON.parse(localStorage.getItem('taskInfo'))
        if (parsedTaskList && parsedTaskList.length > 0) {
            setTaskList(parsedTaskList)
        } else {
            setTaskList(tasks)
        }
    }, [])

    useEffect (() => {
        localStorage.setItem('taskInfo', JSON.stringify(taskListRef.current))
    }, [taskListRef.current])

    console.log(localStorage.getItem('taskInfo'))
    /* console.log(taskList)
    console.log(taskListRef) */

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