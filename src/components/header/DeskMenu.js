import React from 'react'
import styles from "./Menu.module.css"

const menuData = [
    {
        url: "#",
        name: "Home"
    },
    {
        url: "#about",
        name: "Chi Siamo"
    },
    {
        url: "#servizi",
        name: "Servizi"
    },
    {
        url: "#contacts",
        name: "Contatti"
    },
]
const DeskMenu = () => {
  return (
    <nav className={`${styles.deskMenu} ${ styles.navbar}  navbar-dark bg-dark`}>
    {
        menuData.map((item, i) => (
            <a key={i} href={item.url} >{item.name}</a>
        ))
    }
    </nav>
  )
}

export default DeskMenu