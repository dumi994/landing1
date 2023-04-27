import React, {useState} from 'react'
import Layer from '../../Layer/Layer'
import styles from "./Contacts.module.css"
import Info from './Info'
import Form from './Form'
import ListaContatti from './ListaContatti'
const Contacts = () => {
  return (
    <div className={`${styles.contacts}`} id="contacts">
      <Layer className={"mt-4"}>
        <h2 className='text-center pt-5'>Contattaci</h2>
        <div className='container row'>
            {/* <Form></Form> */}
            <ListaContatti></ListaContatti>
            <Info></Info>
        </div>
      </Layer>
    </div>
  )
}

export default Contacts