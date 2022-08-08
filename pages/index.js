import Head from 'next/head' 
import styles from '../styles/Home.module.css' 
import Routines from './Routines'

export default function Home() {
  return (
    <div> 
      <Head>
        <title>Routinery</title>
        <meta name="description" content="Routine tracker app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}> 
        <Routines/>
      </main>

      <footer className={styles.footer}> 
      </footer>
    </div>
  )
}
