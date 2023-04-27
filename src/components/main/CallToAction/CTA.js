import React from 'react'
import PillButton from '../../buttons/PillButton'
import classes from '../../buttons/PillButton.module.css'

import "../../../index.css"
import styles from "./CTA.module.css"
const CTA = () => {
  return (
    <div className={styles.cta}>
        <div className='container'>
          <div className='row '>
            <div className='d-flex align-items-center col-sm-12 col-md-8'>
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
            </div>
            <div className='d-flex align-items-center col-sm-12 col-md-4 my-3'>
              <PillButton className={classes.cbutton }href={"tel:3274142131"}>Chiamaci</PillButton>             
            </div>
          </div>
        </div>
    </div>
  )
}

export default CTA