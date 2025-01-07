  function Item({name,isPacked}){
    let itemcontent=name;
    if(isPacked){
        itemcontent = name + "✅";
    }
    return<li>{itemcontent}</li>;

    
}
  export function Conditional_Rendaring(){
    return (
        <section>
            <h1>PACKING</h1>
            <ul>
             <Item isPacked={true} 
             name="Space suit"/>
          <Item isPacked={true}
          name="Helmet with a golden leaf" />
          <Item 
            isPacked={false} 
            name="Photo of Tam" />
            </ul>

        </section>);
    
    
} 