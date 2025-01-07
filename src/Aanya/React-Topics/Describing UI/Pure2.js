function Cup({guest}){
  return <h2>TEA CUP#{guest}</h2>;
}
export default function Pure(){
  return (<>
  <Cup guest={1}/>
  <Cup guest={2}/>
  </>
  );
}
//pure component:only depends on its props and doesnt modify outside function



//we can change variale we created while rendaring


function Cup2({guest}){
  return <h2>Tea cup for guest #{guest}</h2>;
}

export function  Pure2(){
  let cups=[];
  for(let i=1;i<12;i++){
    cups.push(<Cup2 guest={i} />);

  }
  return cups;

}