import React from 'react'
import Layer from '../../Layer/Layer'
import styles from "./Contacts.module.css"
const Contacts = () => {
  return (
    <div className={`${styles.contacts}`}>
    {/* <div className={styles.teamImg} style={{ backgroundImage:`url(${imgBg})`,backgroundSize:"cover"}}></div> */}
      <Layer>
        <div className='container d-flex py-5'>
          <div className='col-6 my-5'>
            <ul>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              
            </ul>
          </div>
          <form className={`${styles.infoForm} col-6 my-5`}>
            <div class="row my-4">
              <div class="col">
                <input type="text" class="form-control" placeholder="First name"/>
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Last name"/>
              </div>
            </div>
            <div className="row my-4">
              <div className="col">
                <input type="email" class="form-control" placeholder="Email"/>
              </div>
            </div>
            <div className="row my-4">
              <div className="col">
                <textarea name="comment" class="form-control" form="usrform" placeholder="Messaggio"></textarea>
              </div>
            </div>
          </form>
        </div>
      </Layer>
    </div>
  )
}

export default Contacts