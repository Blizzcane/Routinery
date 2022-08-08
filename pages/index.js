import Head from 'next/head'
import Image from 'next/image'
import Dashboard from './Dashboard'
import styles from '../styles/Home.module.css'
import ResponsiveAppBar from './ResponsiveAppBar'

export default function Home() {
  return (
    <div>
    <ResponsiveAppBar />
      <Head>
        <title>Routinery</title>
        <meta name="description" content="Routine tracker app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}> 
        <Dashboard/>
      </main>

      <footer className={styles.footer}> 
      </footer>
    </div>
  )
}
