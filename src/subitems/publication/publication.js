import * as React from "react"
import * as styles from "./publication.module.scss"

export const Publication = () => {
  return (
    <>
      <div className={styles.publication_grid}>
        <a href="https://www.interior.ru/place/12648-kvartira-dlya-semeinoi-pari-v-minske-po-proektu-studii-i-project.html" target="_blank" rel="noreferrer" className={styles.publication_link}>
          <p className={styles.publication_p}>Квартира в&nbsp;центре Минска</p>
        </a>
        <a href="https://realt.onliner.by/2022/06/24/sdelali-modnyj-ofis/" target="_blank" rel="noreferrer" className={styles.publication_link}>
          <p className={styles.publication_p}>Интеллектуальный офис</p>
        </a>
        <a href="https://www.archilovers.com/projects/186425/apartment-in-minsk.html" target="_blank" rel="noreferrer" className={styles.publication_link}>
          <p className={styles.publication_p}>Квартира для холостяка</p>
        </a>
        <a href="https://www.elledecoration.ru/interior/houses/garmonichnyi-dom-pod-minskom-400-m/" target="_blank" rel="noreferrer" className={styles.publication_link}>
          <p className={styles.publication_p}>Гармоничный дом</p>
        </a>
      </div>
    </>
  )
}