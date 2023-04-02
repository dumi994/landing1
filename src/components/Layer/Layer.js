import React from 'react'
import styles from "./Layer.module.css"
const Layer = (props) => {
  return (
    <div className={`${styles.layer} mt-5 mb-5`}>
        {props.children}
    </div>  
  )
}

export default Layer