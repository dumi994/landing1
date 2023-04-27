import React from 'react'
import img from "../../../assets/img/avvocato.jpg"
import styles from "./Team.module.css"
const team = [
    {
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
    },
/* Per aggiungere membri copiaincollare quello di sopra e sostituire i dati */
]

const Team = () => {
  return (
    <div className='container p-5 row'>
        {
            team.map((el,i)=>{
                return (<div className={`${styles.teamCard} col-md-4 my-5 m-auto`}>
                    <div className='d-flex align-items-center flex-column'>
                        <div className={styles.teamImg} style={{ backgroundImage:`url(${img})`,backgroundSize:"cover"}}></div>
                        <h5 className="m-2">{el.nome}</h5>
                    </div>
                    <div className="d-flex justify-content-center m-1">
                        <ul className='d-flex justify-content-center' style={{listStyleType:"none", padding:"0"}}>
                            {
                                el.socials.map((social, i)=>{
                                    return <li className='mx-3' key={i}><a target='_blank' href={social.url}><i className={social.icon}></i></a></li>
                                })
                            }
                            </ul>
                    </div>
                </div>)
            })
        }
    </div>
  )
}

export default Team