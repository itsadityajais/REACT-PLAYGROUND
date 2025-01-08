export function RendaringList(){


const listItems=   people.map(person =><li>
  key={person.id}</li>
  );

return <ul> {listItems}</ul>;

}





 const people = [{
  id: 0, 
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
},
 {id:1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2, 
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',

}, {
  id: 3, 
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4, 
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];
