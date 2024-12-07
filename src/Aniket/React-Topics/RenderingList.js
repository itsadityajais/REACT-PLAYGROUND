// Simple Method
// function Item({ name, isPacked }) {
//   if (isPacked) {
//     return <li>{name} ✅</li>;
//   }
//   return <li>{name} ❌</li>;
// }

//Using Ternary Operator
// function Item({ name, isPacked }) {
//   return <li>{isPacked ? name + " ✅" : name + " ❌"}</li>;
// }
function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + " ✅";
  }
  return <li>{itemContent}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>PACKING LIST</h1>
      <ul>
        <Item name="Shirts" isPacked={true} />
        <Item name="Jeans" isPacked={false} />
        <Item name="Specs" isPacked={true} />
        <Item name="Laptop" isPacked={false} />
        <Item name="Charger" isPacked={true} />
      </ul>
    </section>
  );
}
