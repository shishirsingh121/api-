import  { useState } from 'react'

const Test = () => {
   const [name,setName]=useState(0)
   function addition(){
     setName(name+1)
    
   }
   function subtraction(){
    setName(name-1)
   
    
   }
  return (
    <div>
       
       <h1>{name}</h1>
       <button onClick={addition}>+</button>
       <button onClick={subtraction}>-</button>

      
    </div>
  )
}

export default Test
