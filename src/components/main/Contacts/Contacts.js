import React, {useState} from 'react'
import Layer from '../../Layer/Layer'
import styles from "./Contacts.module.css"
import Info from './Info'
import Form from './Form'

const Contacts = () => {
  return (
    <div className={`${styles.contacts}`}>
      <Layer>
        <div className='container row d-flex py-5'>
        <h2 className='mb-5'>Contattaci</h2>
          <Form></Form>
          <Info></Info>
        </div>
      </Layer>
    </div>
  )
}

export default Contacts