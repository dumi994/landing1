import React from 'react'

const Info = () => {
  return (
    <>
    <div className=' col-md-12 col-lg-6 p-5'>
        <div className='d-flex row'>
            {/* ORARI GROSSETO */}
            <div className='col-md-6 col-sm-12'>
                <h4><i class="fa-solid fa-location-dot"></i> GROSSETO</h4>
                <p>Via Ugo Bassi 12</p>
                <h4><i class="fa-solid fa-clock"></i></h4>
                <div>
                    <p>Lun-Ven 8:00 12:00 | 15:00 - 18:00</p>
                    <p>Sab 8:00 12:00</p>
                    <p>Dom: Chiuso</p>
                </div> 
            </div>
            {/* ORARI FIRENZE */}
            <div className='col-md-6 col-sm-12'>
            <h4><i class="fa-solid fa-location-dot"></i> FIRENZE</h4>
                <p>Via Ugo Bassi 12</p>
                <h4><i class="fa-solid fa-clock"></i></h4>
                <div>
                    <p>Lun-Ven 8:00 12:00 | 15:00 - 18:00</p>
                    <p>Sab 8:00 12:00</p>
                    <p>Dom: Chiuso</p>
                </div> 
            </div>    
        </div>
    </div>
</>
  )
}

export default Info