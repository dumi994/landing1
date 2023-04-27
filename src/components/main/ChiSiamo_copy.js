import React, {useState, useEffect} from 'react'
import "../../index.css"
import styles from "./ChiSiamo.module.css"
import CardIcon from './Cards/CardIcon'
import Card from './Cards/Card'
/*Backgrounds*/
import card1Bg from "../../assets/img/avvocati.jpg"
import Layer from '../layer/Layer'
/* Icons */
const counter = 1
const cardsData = [
  {
    id:counter,
    icon:"fa-regular fa-copyright",
    title:"Tutela del marchio",
    text : "Lo studio segue il marchio dalla registrazione alla tutela stragiudiziale e giudiziaria in caso di contraffazione."
    /* text: [ "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet "] */
  },
  {
    id:counter+1,
    bg:"../../assets/img/avvocati.jpg",
    icon:"fa-regular fa-eye",
    title:"Stalking",
    text: "Si seguono fin dalle fasi iniziali le attività ipotizzate come stalking a carico della vittima."
    /* text: [ "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet ",] */

  },
  {
    id:counter+1,
    bg:"../../assets/img/avvocati.jpg",
    icon:"fa-regular fa-comments",
    title:"Diffamazione",
    text: "Lo studio segue le vittime di reati di diffamazione sia a mezzo stampa che su social network."
    /* text: [ "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet "] */

  },
  {
    id:counter+1,
    bg:"../../assets/img/avvocati.jpg",
    icon:"fa-solid fa-laptop",
    title:"Reati informatici",
    text: "Assistenza giudiziaria nel caso, tra i tanti, di intrusioni nei sistemi informatici, diffamazione a mezzo social network, diffamazione on-line e sostituzione di persona, phishing, truffe informatiche."
/*     text: [ "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet "] */
    
  },
  {
    id:counter+1,
    bg:"../../assets/img/avvocati.jpg",
    icon:"fa-solid fa-car-burst",
    title:"Lesioni ed omicidio stradale",
    text: "Tutela penalistica e diretta al risarcimento del danno per quanto riguarda incidenti stradali, dalle lesioni all'omicidio stradale"
/*     text: [ "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet "] */
    
  },
  {
    id:counter+1,
    bg:"../../assets/img/avvocati.jpg",
    icon:"fa-solid fa-fire",
    title:"Incendi dolosi e colposi",
    text: "Tutela legale per tutti i casi di incendio sia doloso che colposo."
/*     text: [ "Lorem ipsum dolor sit amet ",
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
        <div className={`row d-flex justify-content-center`} >
          {cardsData.map((card, i) => (
            <Card key={i} icon={card.icon} bg={card1Bg} customClass={styles.cardHeight}>
              <Layer>
                <CardIcon ><i className={card.icon}></i></CardIcon>
                <h3 className='my-3'>{card.title}</h3>
                <p>{card.text}</p>
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