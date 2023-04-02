import React from 'react'
import styles from "./Contacts.module.css"

const Form = () => {
  return (
    <>
     <form className={`${styles.infoForm} col-md-12 col-lg-6  `}>
        <div className="row">
            <div className="col-md-6 col-sm-12  my-4">
            <input type="text" className="form-control" placeholder="Nome"/>
            </div>
            <div className="col-md-6 col-sm-12  my-4">
            <input type="text" className="form-control" placeholder="Cognome"/>
            </div>
        </div>
        <div className="row my-4">
            <div className="col-md-12  col-sm-12">
            <input type="email" className="form-control" placeholder="Email"/>
            </div>
        </div>
        <div className="row my-4">
            <div>
            <textarea name="comment" className="form-control" form="usrform" placeholder="Messaggio"></textarea>
            </div>
        </div>
    </form>
    </>
  )
}

export default Form