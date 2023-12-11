import { Input } from "./Input"
import { Task } from "./Task"
import { Button } from "./Button"
import styles from './styles.module.css'

function App() {
  return (
    <div>
      <header className={styles.header}>
        <img src="./public/logo.svg" alt="" />
        <h1>to<span>do</span></h1>
      </header>

      <form className={styles.input}>
        <Input />
        <Button />
      </form>

      <div className={styles.page}>
        <div className={styles.task}>
          <h2>Tarefas criadas <span>5</span></h2>
          <h3>Concluidas <span>2 de 5</span></h3>
        </div>
          <Task />
      </div>
    </div>
  )
}

export default App
