import React, {useState, useEffect} from 'react'
import "../../index.css"
import styles from "./ChiSiamo.module.css"
import CardIcon from './Cards/CardIcon'
import Card from './Cards/Card'
/*Backgrounds*/
import card1Bg from "../../assets/img/avvocati.jpg"
/* Icons */
const cardsData = [
  {
    id:1,
    icon:"fa-regular fa-envelope",
    title:"Lorem ipsum dolor",
    text: [ "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet "]
  },
  {
    id:2,
    bg:"../../assets/img/avvocati.jpg",
    icon:"fa-regular fa-envelope",
    title:"Lorem ipsum dolor",
    text: [ "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet "]

  },
  {
    id:3,
    bg:"../../assets/img/avvocati.jpg",
    icon:"fa-regular fa-envelope",
    title:"Lorem ipsum dolor",
    text: [ "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet "]

  },
  {
    id:4,
    bg:"../../assets/img/avvocati.jpg",
    icon:"fa-regular fa-envelope",
    title:"Lorem ipsum dolor",
    text: [ "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet "]
    
  },
]
const icon1 = 'far fa-lightbulb-exclamation'
const ChiSiamo = (props) => {

  return (
    <div className='container'>
        <div className={`${styles.title_container} `}>
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto similique voluptatem incidunt quasi tempore ipsum voluptas distinctio nostrum dignissimos dolorem soluta alias, suscipit sequi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto similique voluptatem incidunt quasi tempore ipsum voluptas distinctio nostrum dignissimos dolorem soluta alias, suscipit sequi.</p>
        </div>
        <div className={`${styles.cards_container} row`} >
          {cardsData.map((card, i) => (
            <Card key={card.id} icon={card.icon} bg={card1Bg} >
              <CardIcon ><i className={card.icon}></i></CardIcon>
              <h3 className='m-3'>{card.title}</h3>
              <ul > 
                {
                  card.text.map((el,i)=>(
                    <li key={i}>{el}</li>
                  ))
                }
              </ul>
            </Card>
          ))}
        </div>

    </div>
  )
}

export default ChiSiamo