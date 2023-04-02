import React from 'react'
import Card from '../Cards/Card'
import CardIcon from '../Cards/CardIcon'
import Layer from '../../Layer/Layer'
/* import card from "../" */
const servizi = [
    {
        icon:"fa-regular fa-envelope",
        title: "Lorem ipsum dolor sit amet",
        txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto similique voluptatem incidunt quasi tempore ipsum."
    },
    {
        icon:"fa-regular fa-envelope",
        title: "Lorem ipsum dolor sit amet",
        txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto similique voluptatem incidunt quasi tempore ipsum."
    },
    {
        icon:"fa-regular fa-envelope",
        title: "Lorem ipsum dolor sit amet",
        txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto similique voluptatem incidunt quasi tempore ipsum."
    },
    {
        icon:"fa-regular fa-envelope",
        title: "Lorem ipsum dolor sit amet",
        txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto similique voluptatem incidunt quasi tempore ipsum."
    },
    {
        icon:"fa-regular fa-envelope",
        title: "Lorem ipsum dolor sit amet",
        txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto similique voluptatem incidunt quasi tempore ipsum."
    },
    {
        icon:"fa-regular fa-envelope",
        title: "Lorem ipsum dolor sit amet",
        txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto similique voluptatem incidunt quasi tempore ipsum."
    },
    
]
const Servizi = () => {
  return (
    <div className='container row'>
        {servizi.map((servizio, i) => (
            <Card key={i} icon={servizio.icon}>
                <Layer>
                    <CardIcon style={{margin:"20px auto"}}><i className={servizio.icon}></i></CardIcon> 
                    <h3 className='text-left'>{servizio.title}</h3>
                    <p className='mt-3 mb-3 text-left'> {servizio.txt}</p>
                </Layer>
            </Card>
          ))}
    </div>
  )
}

export default Servizi