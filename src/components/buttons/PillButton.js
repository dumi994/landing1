import React from 'react'
const PillButton = (props) => {
  return (
  <a href={props.href} className=" col-12 w-100"> 
    <div className={`${props.className}` } value={props.value} type={props.type}>
       {props.children}
    </div>
  </a>
  )
}

export default PillButton