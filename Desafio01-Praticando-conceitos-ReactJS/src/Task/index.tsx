import styles from './Task.module.css'

export interface TaskType {
    id: number;
    task: []
}
interface TaskProps {
    task: TaskType;
}



export function Task({task}: TaskProps) {
    return(
        <div className={styles.tasks}>
            <img src="../../public/bolinha.svg" alt="" />
            {task.task}
            <img src="../../public/lixeira.svg" alt="" />
        </div>

    )
}