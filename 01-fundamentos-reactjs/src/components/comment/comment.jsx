import { useState } from 'react'
import { Avatar } from '../avatar/Avatar'
import styles from './comment.module.css'
import { Trash, ThumbsUp }  from 'phosphor-react'

export function Comment({ content, onDeleteComment }) {
    const [linkeCount, setlinkeCount] = useState(0)

    function handleLikeComment() {
        setlinkeCount(linkeCount + 1)
    }
    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
                <Avatar hasBorder={false} src="https://github.com/allisonantunes.png" />

                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorAndtime}>
                                <time title='04 de Desembro as 11:13h' dateTime='2023-12-04 05:13:00'>Cerca de 1h atras</time>
                            </div>

                            <button onClick={handleDeleteComment} title='deletar comentario'>
                                <Trash size={24} />
                            </button>
                        </header>

                        <p>{content}</p>
                    </div>

                    <footer>
                        <button onClick={handleLikeComment}>
                            <ThumbsUp />
                            aplauder <span>{linkeCount}</span>
                        </button>
                    </footer>
                </div>
        </div>
    )
}