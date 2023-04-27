import React from 'react'
import styles from "./Contacts.module.css"
import PillButton from '../../buttons/PillButton'
import classes from '../../buttons/PillButton.module.css'

import "../../../index.css";
const ListaContatti = () => {
  return (
    <>
      <div className={`${styles.info} d-flex justify-content-center col-md-12 col-lg-6  `} >
        <div className='justify-content-center align-items-center d-flex flex-column w-100'>
          <div className={`${classes.fbuttonCont} mb-5`}>
            <PillButton className={`${classes.fbutton}`}><a href="tel:3913449739"><i class="fa-solid fa-phone"></i><span> 3913449739</span></a></PillButton>
          </div>
          <div  className={`${classes.fbuttonCont}`}>
            <PillButton className={classes.fbutton }><a href="mailto:mail@example.it"><i class="fa-solid fa-envelope"></i><span> mail@example.com</span></a></PillButton>
          </div>
          
        </div>     
      </div>
    </>
  )
}

export default ListaContatti