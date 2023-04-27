import React from 'react'
import classes from "../components/main/Team/Team.module.css"
import "../index.css"
const social ={
  nome:"Mario Rossi",
  img: "../../../assets/img/avvocato.jpg",
  socials: [
      {
          url:"https://www.facebook.com",
          icon:"fa-brands fa-facebook-f",
      },
      {
          url:"https://www.instagram.com",
          icon:"fa-brands fa-instagram"
      },
      {
          url: "https://www.twitter.com",
          icon :"fa-brands fa-twitter"
      }
  ]
}
const Footer = () => {
  return (
    <section className='footer'>
      <div className='my-5 container d-flex justify-content-center text-center row'>
        <div className="col-12">
          <h4>Studio Legale Pier Francesco Angelini</h4>
        </div>
        <div className="col-12">
          <p>P.IVA 102318203101</p>
        </div>
      </div>

      <hr></hr>

      <div className={`${classes.teamCard} container d-flex justify-content-center text-center row`}>
        <ul className='d-flex justify-content-center' style={{listStyleType:"none", padding:"0"}}>
          {
            social.socials.map((s, i)=>{
                return <li className='mx-3' key={i}><a target='_blank' href={s.url}><i className={s.icon}></i></a></li>
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default Footer