import React, { useState } from 'react';
import styles from "./ToTopArrow.module.css"

function BackToTopArrow() {
  const [showButton, setShowButton] = useState(false);

  function handleScroll() {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  function handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <div  style={{ display: showButton ? 'block' : 'none' }} onClick={handleClick} className={`${styles.toTopArrow}`}>
       <span>
        <i class="fa-solid fa-chevron-up"></i> 
       </span>
    </div>
  );
}

export default BackToTopArrow;

/* import React from 'react'
import styles from "./ToTopArrow.module.css"
const BackToTopArrow = () => {
  return (
    <div className={`${styles.toTopArrow}`}>
      <a href="#"><i class="fa-solid fa-chevron-up"></i></a>
    </div>
  )
}

export default BackToTopArrow */