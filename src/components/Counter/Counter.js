/* import React, { useState, useEffect } from 'react';
function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= props.count) {
          clearInterval(interval);
          return props.count;
        }
        return prevCount + 1;
      });
    }, props.time);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.counter}>    
      <p>{count}</p>
      <h4>{props.element}</h4>
    </div>
  );
}

export default Counter; */
import React, { useState, useEffect } from 'react';
import styles from "./Counter.module.css"

function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('counter');
      const sectionPosition = section.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (sectionPosition < windowHeight) {
        const interval = setInterval(() => {
          setCount((prevCount) => {
            if (prevCount >= props.count) {
              clearInterval(interval);
              return props.count;
            }
            return prevCount + 1;
          });
        }, props.time);

        return () => clearInterval(interval);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.counter}>    
      <p>{count}</p>
      <h4>{props.element}</h4>
    </div>
  );
}

export default Counter;