import React, { useState, useEffect } from "react";
import styles from "./Menu.module.css";
import img from "./studio-legale.jpg";
import classes from "../buttons/PillButton.module.css";
import PillButton from "../buttons/PillButton";
import "../../index.css";
const jumbo = img;
const Jumbotron = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Funzione di callback che si attiva quando la larghezza dello schermo cambia
    const handleResize = () => {
      setScreenWidth(window.innerWidth); // Aggiorna la larghezza dello schermo nello stato
    };

    // Aggiungi un listener per l'evento resize del window
    window.addEventListener("resize", handleResize);

    // Rimuovi il listener quando il componente viene smontato
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`${screenWidth > 900 ? styles.jumbotronH : ""}`}>
      <div
        className={`${styles.jumboImgContainer} `}
        style={{ backgroundImage: `url(${jumbo})` }}
      >
        <div className="layer d-flex align-items-center">
          <div className=" container row ">
            <div className="col-md-6 col-sm-12 my-auto d-flex flex-column">
              <h1 className="titleStyle">Pier Francesco Angelini </h1>
              <h1  className="titleStyle">Studio legale </h1>
              <p className="pStyle mY-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <PillButton href={"#servizi"} className={classes.hbutton}>Scopri di più</PillButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
