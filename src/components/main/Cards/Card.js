import React from 'react'
import styles from "./Card.module.css"

const Card = (props) => {
  return (
    <div className='col-xl-4 col-md-6 col-lg-6 col-sm-12 mt-4' >
      <div className={`${styles.card} ${props.customClass} ${props.class}`} style={{ backgroundImage: `url(${props.bgImg})`, backgroundSize:"cover", backgroundColor:props.bgColor }}>
        {props.children}
      </div>
    </div>
  )
}
export default Card