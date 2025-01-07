import React from "react";
import Chat from "./chat";
import ContactList from "./contacts";
import { useState } from "react";
import "./messenger.css";

const contacts = [
  { id: 0, name: "Aditya", email: "adityajais8877@gmail.com" },
  { id: 1, name: "Aniket", email: "aniket@gmail.com" },
  { id: 2, name: "Adarsh", email: "adarshjais865@gmail.com" },
  { id: 3, name: "React", email: "react.dev@gmail.com" },
];

export function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList contacts={contacts} onSelect={(contact) => setTo(contact)} />
      <Chat key={to.id} contact={to} />
    </div>
  );
}
