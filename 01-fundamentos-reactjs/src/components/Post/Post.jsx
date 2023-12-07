import { Comment } from '../comment/comment'
import {Avatar} from '../avatar/Avatar'
import Styles from './Post.module.css'
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'


export function Post({author, puplishedAt, content}) {

    const publishedDateFormatted = format(
        puplishedAt, "dd 'de' LLLL 'as' HH:mm'h'", 
        {locale: ptBR}
        )
    const publishedDateRelativeToNow = formatDistanceToNow(
        puplishedAt, 
        {
            locale: ptBR,
            addSuffix: true,
        })
    
    const [comments, setComments] = useState([
        'Post muito bacana heim'
    ])

    const [newCommentText, setNewCommentText,] = useState('')

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('') // limpar a text area
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }
    function deleteComment(comment) {

    }

    return(
        <article className={Styles.post}>
            <header>
                <div className={Styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={Styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={puplishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={Styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph') {
                        return (
                            <p key={line.content}>{line.content}</p>
                        )
                    } else if (line.type === 'link') {
                        return (
                            <p key={line.content}><a href="#">{line.content}</a></p>
                        )
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={Styles.comentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name='comment' 
                    placeholder='Deixe um comentario'
                    value={newCommentText} // limpar a text area
                    onChange={handleNewCommentChange}
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={Styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
            </article>
    )
}