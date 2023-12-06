import { Comment } from '../comment/comment'
import {Avatar} from '../avatar/Avatar'
import Styles from './Post.module.css'
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'


export function Post({author, puplishedAt, content}) {
    // estado = variavel que eu quero que o componente monitore
    // setCommentsseria uma funcao para o react saber quando eu altero o valor da variavel

    const [comments, setComments] = useState([
        1,
        2
    ])

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
    function handleCreateNewComment() {
        event.preventDefault()
        // ...comments vai copiar os comentarios atual e depois com o setcomments vai add mais um ao array
        setComments([...comments, comments.length + 1])
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
                            <p>{line.content}</p>
                        )
                    } else if (line.type === 'link') {
                        return (
                            <p><a href="#">{line.content}</a></p>
                        )
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={Styles.comentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentario'/>
               
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={Styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment />
                    )
                })}
            </div>
            </article>
    )
}