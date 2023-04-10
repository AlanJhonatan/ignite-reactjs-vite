import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ text }) {
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

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{text}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir 
                        <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}