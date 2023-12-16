import styles from './Task.module.css'

export interface TaskType {
    id: number;
    task: string
}
interface TaskProps {
    task: string;
}



export function Task({task}: TaskProps) {
    return(
        <div className={styles.tasks}>
            <img src="../../public/bolinha.svg" alt="" />
            {task}
            <img src="../../public/lixeira.svg" alt="" />
        </div>

    )
}