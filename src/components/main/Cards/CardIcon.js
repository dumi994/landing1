import React from 'react'
import styles from "./Card.module.css"
const CardIcon = (props) => {
  return (
    <div style={props.style} className={`${styles.iconContainer} d-flex align-items-center justify-content-center`}>{props.children}</div>
  )
}

export default CardIcon