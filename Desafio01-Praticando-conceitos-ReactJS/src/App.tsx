/* import { Input } from "./Input"
import { Button } from "./Button" */
import { ChangeEvent, FormEvent, useState } from "react"
import { Task } from "./Task"
import styles from './styles.module.css'
import { Button } from "./Button"


function App() {
  // estado para pegar o valor input
  const [inputTask, setInputTask] = useState<string>('')
  // estado para pegar o array resultante
  const [tasks, setTask] = useState<string[]>(['oi'])

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputTask(event.target.value)
  }
  
  // funcao para o envio do form
  function handleFormSubmit(event: FormEvent){
    event.preventDefault()

    setTask([...tasks, inputTask])

    setInputTask('')
  }


  return (
    <div>
      <header className={styles.header}>
        <img src="./public/logo.svg" alt="" />
        <h1>to<span>do</span></h1>
      </header>

      <form onSubmit={handleFormSubmit}>
        <input 
          onChange={handleInputChange}
          className={styles.input}
          value={inputTask}
          type="text"
          required
          placeholder='Adicione uma nova tarefa'
        />
        <Button />
        </form>

      <div className={styles.page}>
        <div className={styles.task}>
          <h2>Tarefas criadas <span>5</span></h2>
          <h3>Concluidas <span>2 de 5</span></h3>
        </div>

        {tasks.map(task => {
              return (
                <Task 
                task={task}
                
                />
                )
            })}
          
      </div>
    </div>
  )
}

export default App
