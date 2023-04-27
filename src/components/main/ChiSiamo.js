import React, {useState, useEffect} from 'react'
import "../../index.css"
import styles from "./ChiSiamo.module.css"
import CardIcon from './Cards/CardIcon'
import Card from './Cards/Card'
/*Backgrounds*/
import card1Bg from "../../assets/img/avvocati.jpg"
import card3Bg from "../../assets/img/avvocato.jpg"
import Layer from "../Layer/Layer"
/* Icons */
const counter = 1
const cardsData = [
  {
    id:counter,
    /* bg:"../../../assets/img/avvocati.jpg", */
    title:"Esperienza",
    bgImg:card1Bg,
    icon:"fa-solid fa-book",
    text : "Lo studio Legale PFA dispone di una struttura organizzativa altamente efficiente e dinamica capace di fornire un’adeguata tutela ai propri assistiti a 360 gradi fornendo una consulenza trasversale in ogni ambito del diritto, avvalendosi altresì dell’apporto di professionisti altamente specializzati in ogni materia."
    /* text: [ "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet "] */
  },
  {
    id:counter+1,
    /* bgImg:"../../../assets/img/avvocati.jpg", */
    title:"Riservatezza",
    bgColor:"#F0AD0D",
    class: "backBlack",
    icon:"fa-regular fa-hand",
    text: "Lo Studio Legale PFA difende ed assiste i propri assistiti mediante un contatto personale e diretto, in quanto reputa essenziale, ai fini del raggiungimento del miglior risultato, avere con essi un rapporto diretto e fondato sulla fiducia reciproca, anche in considerazione delle delicate tematiche trattate."
    /* text: [ "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet ",] */
  },
  {
    id:counter+1,
    title:"Risultati effettivi",
    bgImg:card3Bg,
    icon:"fa-solid fa-square-poll-vertical",
    text: "Lo Studio Legale PFA volge particolare attenzione al costante aggiornamento professionale ed al continuo approfondimento dello studio giuridico. Ciò al fine di fornire sempre una difesa aggiornata e di livello elevato nelle tematiche di volta in volta affrontate."
   /*  text: [ "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet "] */

  },
]
const icon1 = 'far fa-lightbulb-exclamation'
const ChiSiamo = (props) => {

  return (
    <div className='container py-5 ' id="about">
        <div className={`${styles.title_container} my-5`}>
          <h1 className='my-4'>Lo Studio Legale Pier Francesco Angelini nasce nel 1999 a Grosseto</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto similique voluptatem incidunt quasi tempore ipsum voluptas distinctio nostrum dignissimos dolorem soluta alias, suscipit sequi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto similique voluptatem incidunt quasi tempore ipsum voluptas distinctio nostrum dignissimos dolorem soluta alias, suscipit sequi.</p>
        </div>
        <div className={`row d-flex justify-content-center my-5`} >
          {cardsData.map((card, i) => (
            <Card key={i} icon={card.icon} bgColor={card.bgColor} bgImg={card.bgImg} customClass={styles.cardHeight}>
             <Layer bgc={card.bgColor && card.bgColor} className={"p-4"}>
                <CardIcon customClass={card.class}><i className={card.icon} ></i></CardIcon>
                <h3 className='my-3'>{card.title}</h3>
                {<p>{card.text}</p>}
                {/* <ul > 
                  {
                    card.text.map((el,i)=>(
                      <li key={i}>{el}</li>
                    ))
                  }
                </ul> */}
              </Layer>
            </Card>
          ))}
        </div>

    </div>
  )
}

export default ChiSiamo