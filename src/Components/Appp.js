import React, { useState } from 'react';

function Appp() {

    const [count, setCount] = useState(4)
    const [theme, setTheme] = useState('blue')

    function decrementCount() {
        setCount( prevCount => prevCount - 1 )
        setTheme('red')
        // setCount(prevCount => prevCount - 1 )
        // setCount(prevCount => prevCount - 1 )
    }

        function incrementCount() {
            setCount( prevCount => prevCount + 1 )
            setCount( prevCount => prevCount + 1 )
            setTheme('green')
            // setCount(prevCount => prevCount + 1 )
            // setCount(prevCount => prevCount + 1 )
    }

  return (
    <>
      <button onClick={decrementCount}>-</button> 
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default Appp
