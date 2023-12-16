import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Input.module.css'
import { Button } from '../Button';


export function Input() {
    return(
        <input 
          onChange={handleInputChange}
          className={styles.input}
          value={inputTask}
          type="text"
          required
          placeholder='Adicione uma nova tarefa'
        />
    )
}