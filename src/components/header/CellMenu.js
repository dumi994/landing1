import React, {useState, useEffect, useRef} from 'react'
import useOutsideClick from './useOutsideClick';
import styles from "./Menu.module.css"
import DeskMenu from './DeskMenu';
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
const openIcon = "fa-solid fa-bars"
const closeIcon = "fa-sharp fa-solid fa-x"
const CellMenu = (props) => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	useEffect(() => {
    // Funzione di callback che si attiva quando la larghezza dello schermo cambia
    const handleResize = () => {
      setScreenWidth(window.innerWidth); // Aggiorna la larghezza dello schermo nello stato
    };

    // Aggiungi un listener per l'evento resize del window
    window.addEventListener('resize', handleResize);

    // Rimuovi il listener quando il componente viene smontato
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
	/* toggle menu */
  const [toggle, setToggle] = useState(false)
  const clMenu= () => { 
    setToggle(!toggle)
  }
  
  const menuRef = useRef(null);

  useOutsideClick(menuRef, () => {
    setToggle(false);
  });
	/*/ toggle menu */
  return (
    <div ref={menuRef} >
			<div className={styles.menuIcon} style={{  marginLeft:"50% " }} onClick={() =>clMenu(!toggle)}>
					<i className={`${toggle ? closeIcon : openIcon}`}></i>
			</div> 
			{
			toggle && 
				<div className={styles.sidebar} >
					<div className={`${styles.menu} mt-5`}>
					{
						menuData.map((item, i) => (
							<a key={i} href={item.url} onClick={() =>clMenu(!toggle)}>{item.name}</a>
						))
					}
					</div> 
				</div> 
			}
    </div>
  )
}

export default CellMenu
