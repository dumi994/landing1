import React from 'react'
import styles from "./Layer.module.css"
const Layer = (props) => {
  return (
    <div className={`${styles.layer} p-4`}>
        {props.children}
    </div>  
  )
}

export default Layer