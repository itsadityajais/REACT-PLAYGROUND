import { useState } from "react";
import { sculptureList } from "./data";

//using state
export default function Gallery(){
    //array destructing syntax
    
    const[index,setIndex]=useState(0);
    const[showMore,setShowMore]=useState(false)

    
    let prev=index>0;
    let next=index< sculptureList.length-1;

    function handleClick(){
        if(next){
        setIndex(index+1);
    }}

    function Details(){
       
        setShowMore(!showMore)
    }
  function handleClickPrev(){
    if(prev){
    setIndex(index-1);
    }
  }
  function handleInput(e){
    setIndex(+e.target.value)//updating the index
  }
    

     let sculpture=sculptureList[index];


     return (<>
      <button onClick={handleClick} disabled= {!next}>Next</button>
      <button onClick={handleClickPrev} disabled={!prev}>Previous</button>
  
  <select onChange={handleInput}>{sculptureList.map((sculpture,i) =>
    (<option  key =
        {i} value={i}>
      {i+ 1} .{sculpture.name} 
    </option>
  ))}
    
  </select>
      <h2>{sculpture.name} by {sculpture.artist}</h2>
      <h3> ({index + 1} of {sculptureList.length})</h3>
      
       <button onClick={Details}>{showMore ? 'Hide':'Show'} Details </button>
      
       {showMore && <p>{sculpture.description}</p>}

      <img src={sculpture.url} alt ={sculpture.alt}/>
      


    </>
    );

}