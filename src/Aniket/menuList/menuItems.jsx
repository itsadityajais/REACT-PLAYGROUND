import { useState } from "react";
import { MenuList } from "./menuList";

export function MenuItem({ item }) {
  const [showChildren, setShowChildren] = useState(false);

  function handleToggle() {
    setShowChildren(!showChildren);
  }

  return (
    <li>
      <div>
        {item.label}
        {item.children && item.children.length > 0 && (
          <span onClick={handleToggle}>{showChildren ? "-" : "+"}</span>
        )}
      </div>
      {showChildren && item.children ? <MenuList list={item.children} /> : null}
    </li>
  );
}
