import React, { useState } from "react";

const Counter = () => {
    
    const [num, setNum] = useState(0)

    const incNum = () => {
        setNum(num + 1)
    }
    const decNum = () => {
        if (num > 0) {
            setNum(num - 1)
        }
    }
    
    return(
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <h1> {num} </h1>
                    <div className='btn_div'>
                        <button className='btn_incm' onClick={incNum}> + </button>
                        <button className='btn_decm' onClick={decNum}> - </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter;