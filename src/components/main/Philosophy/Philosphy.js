import React from 'react'
import Layer from '../../Layer/Layer'
import imgBg from "../../../assets/img/studio-legale.jpg"
import Card from '../Cards/Card'
import styles from "./Phylosophy.module.css"
const philisophy = [
    {
        title:"Riccardo Bacchelli",
        txt: " La libertà non è un lusso degli uomini colti, ma il diritto di tutti gli uomini. "

    },
    {
      title:" Charles de Montesquieu",
      txt: "La legge non è giusta perché è legge, ma diventa legge perché è giusta. "
    },
]
const Philosphy = () => {
  return (
    <div className='' style={{backgroundImage:`url(${imgBg})`, backgroundSize:"cover"}}>
      <Layer>
        <div className='container row pt-5 pb-5'>
          
          <div className='col-sm-12 col-12 col-md-12 col-xl-6 my-5 d-flex align-items-center'>
            <p style={{lineHeight:"40px", fontSize:"18px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
          <div className='col-sm-12 col-12 col-md-12 col-xl-6 '>
            {
              philisophy.map((el, i)=>{ 
                return (
                <div className={`${styles.phylosphyCard} col-12 my-5 `} key={i}>
                  <h2><i className="fa-sharp fa-solid fa-quote-left"></i><br></br>{el.txt}</h2>
                  <h5><strong>{el.title}</strong></h5>
                </div>)
              })
            }
          </div>
        </div>
      </Layer> 

    </div>
  )
}

export default Philosphy