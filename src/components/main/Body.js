import React from 'react'
import styles from "./Body.module.css"
import ChiSiamo from './ChiSiamo'
import CTA from './CallToAction/CTA'
import Servizi from './Servizi/Servizi'
import Philosphy from './Philosophy/Philosphy'
import Team from './Team/Team'
import Contacts from './Contacts/Contacts'
import Footer from '../Footer'
import BackToTopArrow from '../BackToTop/BackToTopArrow'
const Body = () => {
  return (
    <div className={styles.body}>
        <ChiSiamo />
        <CTA ></CTA>
        <Servizi></Servizi>
        <Philosphy></Philosphy>
        <Team></Team>
        <Contacts></Contacts>
        <Footer></Footer>
        <BackToTopArrow></BackToTopArrow>
    </div>
  )
}

export default Body