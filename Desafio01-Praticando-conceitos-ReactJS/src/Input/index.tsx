import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Input.module.css'
import { Button } from '../Button';


export function Input() {
    return(
        <form>
        <input 
        className={styles.input}
        type="text" 
        placeholder='Adicione uma nova tarefa'
        />
        </form>
    )
}