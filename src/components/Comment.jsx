import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ text, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0)

    function handleLikeComment() {
        setLikeCount((state) => (state + 1))
    }
    
    function handleDeleteComment() {
        onDeleteComment()
    }
    
    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/alanjhonatan.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Alan França</strong>
                            <time title='08 de Abril às 22:34' dateTime='2023-05-08 22:34'>Cerca de 1h atrás</time>   
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{text}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir 
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}