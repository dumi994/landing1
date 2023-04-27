import React from 'react'
import styles from "./Layer.module.css"
const Layer = (props) => {
  return (
    <div style={{backgroundColor:props.bgc}} className={`${styles.layer} ${props.className}`}>
        {props.children}
    </div>  
  )
}

export default Layer