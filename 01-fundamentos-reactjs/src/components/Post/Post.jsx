import Styles from './Post.module.css'

export function Post() {
    return(
        <article className={Styles.post}>
            <header>
                <div className={Styles.author}>
                    <img className={Styles.avatar} src="https://github.com/allisonantunes.png" alt="" />
                    <div className={Styles.authorInfo}>
                        <strong>Allison</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='04 de Desembro as 11:13h' dateTime='2023-12-04 05:13:00'>Publicado há 1h</time>
            </header>

            <div className={Styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>

                <p> 
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            </article>
    )
}