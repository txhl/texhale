import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <div className={styles.container}>
    <div className={styles.header}>
    <h1 className={styles.title}>Texhale</h1>
      <nav className={styles.navbar}>
        <a className={styles.navItem} href="">about</a>
        <a className={styles.navItem} href="">services</a>
        <a className={styles.navItem} href="">portfolio</a>
        <a className={styles.navItem} href="">blog</a>
        <a className={styles.navItem} href="">youtube</a>
        <a className={styles.navItem} href="">contact</a>
      </nav>
    </div>

    <div className={styles.content}>
      <div className={styles.taglineBox}>
        <h2 className={styles.tagline}>Lets Build Something</h2>
      </div>
      <div className={styles.taglineBox2}>
        <h2 className={styles.tagline2}>To Be Proud Of</h2>
        <button className={styles.mainCTA}>learn more</button>
      </div>
    </div>

   </div>
  )
}
