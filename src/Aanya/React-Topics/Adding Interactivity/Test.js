/* <button onClick={handleClick}>Next</button>
<button onClick={handlePrev}>Prev</button>

const[index,setIndex]=useState(0)
function handleClick(){
    setIndex(index+1)
}
function handleSelect(e){
    setIndex(+e.target.value)
}


const arr=[imag1,imag2,imag3]

arr[index] */

//state
//useState

//const[index,setIndex]=useState(0)

// let index=0;
// function handleclick(){
//  index =index+1 
//  console.log("yesssssssss")
 
// }

import React, { useState } from 'react'


export default function Test() {

const[index,setIndex]=useState(0)
function handleClick(){
  setIndex(index+1)
}

console.log("yessssssss")
  return (
    <div>
      <button onClick={handleClick}> {index} </button> 
 
    </div>
  )
}




