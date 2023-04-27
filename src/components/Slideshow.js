import React from 'react'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import studLeg from "../assets/img/studio-legale.jpg"
import PillButton from './buttons/PillButton';
import styles from "./buttons/PillButton.module.css"
import "../index.css"
 
const slideImages = [
  {
    //url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    url: studLeg,
    caption: 'Slide 1',
    txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto similique voluptatem incidunt quasi tempore ipsum voluptas distinctio nostrum dignissimos dolorem soluta alias, suscipit sequi. Lorem ipsum dolor, sit amet consectetur adipisicing elit."
  },
 /*  {
    //url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    url: studLeg,
    caption: 'Slide 2',
    txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit."
  },
  {
    //url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    url: studLeg,
    caption: 'Slide 3',
    txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit."
  },
  {
    url: studLeg,
    //url:" ../assets/img/studio-legale.jpg",
    caption: 'Slide 4',
    txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit."
  }, */
  
];

const Slideshow = () => {
  return (
    <div className="slide-container" >
      {slideImages.length >= 1 ?<Slide>
      {slideImages.map((slideImage, index)=> (
          <div key={index}>
            <div className="divStyle" style={{ 'backgroundImage': `url(${slideImage.url})`}}>
              <div className='slideshowLayer'>
                <div className="cont">
                    <h1 className="titleStyle">{slideImage.caption}</h1>
                    <p className='pStyle'>{slideImage.txt}</p>
                    <PillButton className={styles.hbutton} >Scopri di più</PillButton>
                </div>
              </div>
            </div>
          </div>
        ))} 
      </Slide> : "no-slides"}
    </div>
  )
}

export default Slideshow