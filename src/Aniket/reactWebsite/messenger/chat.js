import { useState } from "react";

export default function Chat({ contact }) {
  const [text, setText] = useState("");
  return (
    <div>
      <textarea
        value={text}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => setText(e.target.value)}
      />

      <button>Send to {contact.email}</button>
    </div>
  );
}
