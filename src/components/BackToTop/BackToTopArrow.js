import React from 'react'
import styles from "./ToTopArrow.module.css"
const BackToTopArrow = () => {
  return (
    <div className={`${styles.toTopArrow}`}>
      <a href="#"><i class="fa-solid fa-chevron-up"></i></a>
    </div>
  )
}

export default BackToTopArrow