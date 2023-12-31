import { Post, PostType } from "./components/Post/Post";
import { Header} from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from './App.module.css'
import './global.css'

// author: { avatar_url: '', name: '', role: ''}
// puplishedAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'github.com/allisonantunes.png',
      name: 'Allison',
      role: 'student Dev'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: '👉jane.design/doctorcare'},
      { type: 'link', content: '#novoprojeto #nlw #rocketseat'}
    ],
    puplishedAt: new Date('2023-12-05 17:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'github.com/maykbrito.png',
      name: 'Mayk brito',
      role: 'Educator @RocketSeat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: '👉jane.design/doctorcare'},
      { type: 'link', content: '#novoprojeto #nlw #rocketseat'}
    ],
    puplishedAt: new Date('2023-10-04 18:00:00')
  },
]

export function App() {

  return (
    <div>
      < Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id} 
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
