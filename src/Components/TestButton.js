import React, { useState } from 'react'


const TestButton =()=>{
const [counter,setCounter]=useState(0);



const onclickInc=()=>{
    setCounter(counter+1);
}

const onclickDec=()=>{
    setCounter(counter-1);
}


    return(
<div>

    <button onClick={onclickInc}>Increment</button>
    <p> {counter} </p>
    <button onClick={onclickDec}>Decrement</button>

</div>

    )
}

export default TestButton;