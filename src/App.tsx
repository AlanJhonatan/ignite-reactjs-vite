import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Post, PostType } from './components/Post';

import styles from './App.module.css';
import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat',
    },
    contents: [
      { type: 'paragraph', text: 'Fala galeraa 👋'},
      { type: 'paragraph', text: 'Acabei de subir mais um projeto no meu portifa.'},
      { type: 'paragraph', text: 'É um projeto que fiz no NLW Return, evento da Rocketseat.'},
      { type: 'paragraph', text: 'O nome do projeto é DoctorCare 🚀'},
      { type: 'link', text: 'jane.design/doctorcare'},
    ],
    tags: [
      '#novoprojeto', '#nlw', '#rocketseat'
    ],
    publishedAt: new Date('2023-04-6 23:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @ Rocketseat',
    },
    contents: [
      { type: 'paragraph', text: 'Fala galerinha do bem 👋'},
      { type: 'paragraph', text: 'O nome do projeto é DoctorCare 🚀'},
      { type: 'paragraph', text: 'É um projeto que fiz no NLW Return, evento da Rocketseat.'},
      { type: 'paragraph', text: 'Acabei de subir mais um projeto no meu portifa.'},
      { type: 'link', text: 'jane.design/doctorcare'},
    ],
    tags: [
      '#novoprojeto', '#nlw', '#rocketseat'
    ],
    publishedAt: new Date(),
  },
]

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          {
            posts.map((post) => {
              return (
                <Post key={post.id} post={post} />
              )
            })
          }
        </main>
      </div>
    </>
  )
}
