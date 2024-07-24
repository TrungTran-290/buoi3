import React, { useCallback, useEffect, useState } from 'react'

function Hook7() {
    const [count,setCount] = useState(1)
    const [number,setNumber] =useState(1)
    // useEffect(()=>{
    //     console.log("null")
    // })
    useEffect(()=>{
        console.log("empty")
    },[])
    useEffect(()=>{
        console.log("empty1")
    },[count])
    useEffect(()=>{
        console.log("empty2")
    },[count,number])
    useEffect(()=>{
        const interval = setInterval(()=>{
            console.log("loop")
            setCount(count=>count+1)
        },)
    return ()=>{
        clearInterval(interval)
        console.log("run clear")
    }
    },[])
  return (
    <div>
      <h1>Title Practice</h1>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)} >Cound UP</button>
      <p>{number}</p>
      <button onClick={()=>setNumber(number+1)}>Number UP</button>
    </div>
  )
}

export default Hook7
