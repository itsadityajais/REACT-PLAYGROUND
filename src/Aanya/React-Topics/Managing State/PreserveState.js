import { useState } from "react"

//as long as it is in same position in ui tree
export function PreserveState(){
    const[isFancy,setIsFancy]=useState(false);
    return (<div>
        {isFancy ? (<Counter isFancy={true }/>) : <div><Counter isFancy={false} /> </div>}
        {/*<Counter isFancy={false}/> )}*/}
       <label>
<input type="checkbox" checked={isFancy} 
onChange={e=>{ setIsFancy(e.target.checked)}}/>
Use Fancy Styling
       </label>
    </div>
    )}
//counter is alwasy the first child of div so counter state doesnt reset
function Counter({isFancy}){
    const[score,setScore]=useState(0);
    const[hover,setHover]=useState(false);
    let className="counter"
    if (hover) {
        className += ' hover';
      }
      if (isFancy) {
        className += ' fancy';
      }
    return (
      <div className={className} onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}>
        <h1>{score}</h1>
        <button onClick={()=>setScore(score+1)}> AddOne</button>
      </div>);
}