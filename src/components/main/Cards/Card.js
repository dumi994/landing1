import React from 'react'
import styles from "./Card.module.css"
import Layer from '../../Layer/Layer'
const Card = (props) => {
  return (
    <div className='col-12 col-md-4 col-sm-12 col-xs-12 mt-4' >
      <div className={`${styles.card}`} style={{backgroundImage:`url(${props.bg})`, backgroundSize:"cover", maxHeight:"410px"}}>
          <Layer>
            {props.children}
          </Layer>         
      </div>
    </div>
  )
}
export default Card