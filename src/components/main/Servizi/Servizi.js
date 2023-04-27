import React from 'react'
import Card from '../Cards/Card'
import CardIcon from '../Cards/CardIcon'
import Counter from '../../Counter/Counter'
/* import card from "../" */
const servizi = [
    {
        icon:"fa-regular fa-copyright",
        title:"Tutela del marchio",
        txt : "Lo studio segue il marchio dalla registrazione alla tutela stragiudiziale e giudiziaria in caso di contraffazione."
        
    },
    {
        icon:"fa-regular fa-eye",
        title:"Stalking",
        txt: "Si seguono fin dalle fasi iniziali le attività ipotizzate come stalking a carico della vittima."

    },
    {
        icon:"fa-regular fa-comments",
        title:"Diffamazione",
        txt: "Lo studio segue le vittime di reati di diffamazione sia a mezzo stampa che su social network."
    },
    {
        icon:"fa-solid fa-laptop",
        title:"Reati informatici",
        txt: "Assistenza giudiziaria nel caso, tra i tanti, di intrusioni nei sistemi informatici, diffamazione a mezzo social network, diffamazione on-line e sostituzione di persona, phishing, truffe informatiche."

    },
    {
        icon:"fa-solid fa-car-burst",
        title:"Lesioni ed omicidio stradale",
        txt: "Assistenza giudiziaria nel caso, tra i tanti, di intrusioni nei sistemi informatici, diffamazione a mezzo social network, diffamazione on-line e sostituzione di persona, phishing, truffe informatiche."

    },
    {
        icon:"fa-solid fa-fire",
        title:"Incendi dolosi e colposi",
        txt: "Tutela legale per tutti i casi di incendio sia doloso che colposo."
    },
    
    
]
const Servizi = () => {
  return (
    <>
    <div className='container row d-flex justify-content-around my-5 text-center' id="servizi">
        <h2 className='my-4 '>Perché scegliere Lo studio legale PFA?</h2>
        {servizi.map((servizio, i) => (
            <Card key={i} icon={servizio.icon} customClass={"p-3"}>
                <CardIcon style={{margin:"20px auto"}}><i className={servizio.icon}></i></CardIcon> 
                <h3 className='text-left'>{servizio.title}</h3>
                <p className='mt-3 mb-3 text-left'> {servizio.txt}</p>
            </Card>
          ))}
    </div>
   <div className=" container d-flex justify-content-center row mb-4">
    <h2 className='text-center'>I nostri successi</h2>
        <div className='col-sm-12 col-md-4'>
            <Counter element={"Clienti soddisfatti"} time={50} count={30}></Counter>
        </div>
        <div className='col-sm-12 col-md-4'>
            <Counter element={"Processi vinti"}  time={80} count={42}></Counter>
        </div>
        <div id="counter"></div>
   </div>

    </>
  )
}

export default Servizi