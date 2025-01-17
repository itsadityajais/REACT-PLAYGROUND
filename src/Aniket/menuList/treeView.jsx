import { MenuList } from "./menuList";
import "./treeViewStyles.css";
export function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}
