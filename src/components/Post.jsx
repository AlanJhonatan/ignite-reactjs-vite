import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post({ author, contents, tags, publishedAt }) {    
    const [comments, setComments] = useState([
        'Que daora !'
    ])

    const [commentText, setCommentText] = useState('')
    
    const publishedDateFormatted = format(
        publishedAt, 
        "d 'de' LLLL 'às' HH:mm'h'",
        {
            locale: ptBR
        }
    )

    const publishedDateRelative = formatDistanceToNow(
        publishedAt,
        {
            addSuffix: true,
            locale: ptBR,
        }
    )

    function handleCreateNewComment(event) {
        event.preventDefault()
        
        setComments([...comments, commentText])
        setCommentText('')
    }

    function handleNewCommentChange(event) {
        setCommentText(event.target.value)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelative}</time>
            </header>

            <div className={styles.content}>
                {
                    contents.map((content) => {
                        return content.type === 'paragraph' ?
                            <p>{content.text}</p>
                            : <p><a href='#'> {content.text}</a></p>
                    })
                }
                {
                    tags.map((tag) => {
                        return (
                            <>
                                <a href="#">{tag}</a>
                                {'  '}
                            </>
                        )
                    })
                }
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChange}
                    value={commentText}
                />

                <footer>
                    <button type='submit' onClick={handleCreateNewComment}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map((comment) => {
                        return (
                            <Comment text={comment} />
                        )
                    })
                }
            </div>
        </article>
    )
}