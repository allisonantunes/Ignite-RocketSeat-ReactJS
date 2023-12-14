/* import { Input } from "./Input"
import { Button } from "./Button" */
import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react"
import { Task, TaskType } from "./Task"
import styles from './styles.module.css'


function App() {

  const [newTasksText, setNewTasksText] = useState('')

  const [tasks, setTask] = useState([
    'task'
  ])

  function handleCreateTask(event: FormEvent){
    event.preventDefault()
    
    setTask([...tasks, newTasksText])
    setNewTasksText('')
  }

  function handleNewTask(event: ChangeEvent) {

    console.log(newTasksText);
    
    setNewTasksText(event.target.value)
  }


/*   const tasks: TaskType[] = [
   { 
    id: 1,
    task: []
  },

  ] */

  return (
    <div>
      <header className={styles.header}>
        <img src="./public/logo.svg" alt="" />
        <h1>to<span>do</span></h1>
      </header>

      <form onSubmit={handleCreateTask}>
        <input 
          onChange={handleNewTask}
          className={styles.input}
          type="text" 
          placeholder='Adicione uma nova tarefa'
        />

        <button 
            className={styles.button}
            >
            Criar
            <img src="../../public/plus.svg" alt="" />
        </button>
        </form>

      <div className={styles.page}>
        <div className={styles.task}>
          <h2>Tarefas criadas <span>5</span></h2>
          <h3>Concluidas <span>2 de 5</span></h3>
        </div>

        <div className={styles.tasks}>
            <img src="../../public/bolinha.svg" alt="" />
            {tasks.map(task => {
              return task
            })}
            <img src="../../public/lixeira.svg" alt="" />
        </div>
          
      </div>
    </div>
  )
}

export default App
