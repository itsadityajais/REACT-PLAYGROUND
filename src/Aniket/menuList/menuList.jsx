import { MenuItem } from "./menuItems";

export function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length // If its greater then 0
        ? list.map((listItems) => <MenuItem item={listItems} />) //map the list of data in menuItem
        : null}
    </ul>
  );
}
