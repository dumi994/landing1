import React from 'react'
import Layer from '../../Layer/Layer'
import imgBg from "../../../assets/img/studio-legale.jpg"
const philisophy = [
    {
        title:"Lorem ipsum dolor",
        txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto similique voluptatem incidunt quasi tempore ipsum."

    },
    {
        title:"Lorem ipsum dolor",
        txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto similique voluptatem incidunt quasi tempore ipsum."
    },
]
const Philosphy = () => {
  return (
    <div className='' style={{backgroundImage:`url(${imgBg})`, backgroundSize:"cover"}}>
      <Layer>
        <div className='container row pt-5 pb-5'>
          {
            philisophy.map((el, i)=>{ 
              return (<div className='col-12 mt-5 mb-5' key={i}>
                <h2>{el.title}</h2>
                <p>{el.txt}</p>
              </div>)
            })
          }
        </div>
      </Layer> 
    </div>
  )
}

export default Philosphy