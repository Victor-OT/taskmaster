import React from 'react'
import ReactDOM from 'react-dom/client'
import { TaskMasterContextProvider } from './Context/index.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskMasterContextProvider>
      <App />
    </TaskMasterContextProvider>
  </React.StrictMode>,
)
