import React, { useState } from 'react';
import './App.css';

const Count = () => {
    const [counter, setCounter] = useState(0)
    const handleClick1 = () => {
         setCounter(counter + 1)

        // setCounter()
    }
    const handleClick2 = () => {
        setCounter(counter - 1)
     }
    return ( 
        <>
            <div className='Counter'>
                Counter application
                <div style={{
                    fontSize: '120%',
                    position: 'relative',
                    top: '10vh',
                }}>
                    {counter}
                </div>
                <div className='buttons'>
                    <div className='button1'>
                        <button onClick={handleClick1} style={{ backgroundColor: 'green' }}>Increment</button>
                    </div>
                    <div>
                        <button onClick={handleClick2} style={{ backgroundColor: 'red' }}>Decrement </button>

                    </div>
                </div>


            </div>

        </>
    )
}

export default Count