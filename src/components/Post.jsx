import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post({ author, contents, tags, publishedAt }) {
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
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}