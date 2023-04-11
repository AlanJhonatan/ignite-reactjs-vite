import React, { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

interface Author {
    avatarUrl: string
    name: string
    role: string
}

interface Content {
    type: 'paragraph' | 'link'
    text: string
}

interface PostProps {
    author: Author
    publishedAt: Date
    contents: Content[]
    tags: string[]
}

export function Post({ author, contents, tags, publishedAt }: PostProps) {    
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

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()
        if(!commentText) return
        
        setComments([...comments, commentText])
        setCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Este campo é obrigatório !!!')
    }

    function deleteComment(comment: string) {
        setComments((prevState) => prevState.filter((item) => item !== comment))
    }

    const isNewCommentEmpty = !commentText

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
                            <p key={content.text}>{content.text}</p>
                            : <p key={content.text}><a href='#'> {content.text}</a></p>
                    })
                }
                {
                    tags.map((tag) => {
                        return (
                            <a href="#" key={tag}>{tag}</a>
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
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' onClick={handleCreateNewComment} disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map((comment) => {
                        return (
                            <Comment onDeleteComment={() => deleteComment(comment)} key={comment} text={comment} />
                        )
                    })
                }
            </div>
        </article>
    )
}