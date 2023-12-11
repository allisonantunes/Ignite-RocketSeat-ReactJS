import styles from './styles.module.css'

export function Button() {
    return(
        <button className={styles.button}>
            Criar
            <img src="../../public/plus.svg" alt="" />
        </button>
    )
}