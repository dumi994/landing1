import React, {useState, useEffect, useRef} from 'react'
import useOutsideClick from './useOutsideClick';
import Slideshow from '../Slideshow'
import CellMenu from './CellMenu'
import Jumbotron from './Jumbotron'
import DeskMenu from './DeskMenu';
import BackToTopArrow from '../BackToTop/BackToTopArrow';

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
/* const openIcon = "fa-solid fa-bars"
const closeIcon = "fa-sharp fa-solid fa-x" */
const Header = () => {
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
  return (
    <>
      {screenWidth < 900 ? <CellMenu /> : <DeskMenu /> }
      {/* <Slideshow/> */}
     { <Jumbotron />}
    </>
  )
}

export default Header