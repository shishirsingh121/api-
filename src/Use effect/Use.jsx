import React, { useEffect, useState } from 'react'

const Use = () => {
    const[count,setCount]=useState(0)
    function add(){
        setCount(count+1)

    }
    useEffect(()=>{
        console.log("welcome to site")
    },[])
  return (
    <div>
      {count}
      <button onClick={add}>+</button>
    </div>
    
  )
}

export default Use
