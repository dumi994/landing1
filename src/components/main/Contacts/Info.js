import React from 'react'
import styles from "./Contacts.module.css"
const Info = () => {
  return (
    <>
    <div className={`${styles.info} text-center col-md-12 col-lg-6 my-5 px-4    `}>
        <div className=' row'>
            {/* ORARI GROSSETO */}
            <div className={`${styles.orari} col-md-6 col-sm-12`}>
                <h4> <i class="fa-solid fa-location-dot"></i> GROSSETO</h4>
                <p>Via Lorem Ipsum 12</p>
                <div className={`${styles.primoDiv} my-4`}>
                    <h4><i class="fa-solid fa-clock"></i> Orari di apertura</h4>
                    <div className='row d-flex alig-items-center my-4'>
                        <div className='col-5 d-flex align-self-center'>
                            Lun-Ven:
                        </div>
                        <div className='col-7 '>
                            <p> 8:00 - 12:00</p>
                            <p> 15:00 - 18:00</p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='row d-flex alig-items-center'>
                        <div className='col-5  '>
                            Sab:
                        </div>
                        <div className='col-7 '>
                            <p>8:00 - 12:00</p>
                        </div>
                    </div> 
                    <div className='row d-flex alig-items-center'>
                        <div className='col-5  '>
                            Dom:
                        </div>
                        <div className='col-7 '>
                            <p>Chiuso</p>
                        </div>
                    </div> 
                </div>
            </div>    
            {/* ORARI FIRENZE */}
            <div className={`${styles.orari} col-md-6 col-sm-12`}>
                <h4> <i class="fa-solid fa-location-dot"></i> FIRENZE</h4>
                <p>Via Lorem Ipsum 12</p>
                <div className={`${styles.primoDiv} my-4`}>
                    <h4><i class="fa-solid fa-clock"></i> Orari di apertura</h4>
                    <div className='row d-flex alig-items-center my-4'>
                        <div className='col-5 d-flex align-self-center'>
                            Lun-Ven:
                        </div>
                        <div className='col-7 '>
                            <p> 8:00 - 12:00</p>
                            <p> 15:00 - 18:00</p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='row d-flex alig-items-center'>
                        <div className='col-5  '>
                            Sab:
                        </div>
                        <div className='col-7 '>
                            <p>8:00 - 12:00</p>
                        </div>
                    </div> 
                    <div className='row d-flex alig-items-center'>
                        <div className='col-5  '>
                            Dom:
                        </div>
                        <div className='col-7 '>
                            <p>Chiuso</p>
                        </div>
                    </div> 
                </div>
            </div>     
        </div>
    </div>
</>
  )
}

export default Info

  {/* ORARI GROSSETO */}
/*   <div className={`${styles.orari} col-md-6 col-sm-12`}>
   
  <h4> <i class="fa-solid fa-location-dot"></i> Grosseto</h4>
  <p>Via Lorem Ipsum 12</p>
  <div className={`${styles.primoDiv}`}>
      <h4><i class="fa-solid fa-clock"></i> Orari di apertura</h4>
      <div>
          <p>Lun-Ven 8:00 12:00 | 15:00 - 18:00</p>
          <p>Sab 8:00 12:00</p>
          <p>Dom: Chiuso</p>
      </div> 
  </div>
</div> */