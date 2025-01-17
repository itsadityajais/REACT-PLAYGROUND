export default function ContactList({ contacts, onSelect }) {
  const contactNames = [];
  for (let i = 0; i < contacts.length; i++) {
    contactNames.push(
      <li key={contacts[i].id}>
        <button onClick={() => onSelect(contacts[i])}>
          {contacts[i].name}
        </button>
      </li>
    );
  }
  return (
    <div>
      <ul className="list">{contactNames}</ul>
    </div>
  );
}
