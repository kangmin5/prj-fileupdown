import SidebarItem from "./SidebarItem"
import items from "../data/sidebar.json"

const SideMenu = () => {
  return (
    <div className="sidemenu">
        { items.map((item, index) => <SidebarItem key={index} item={item} />) }
    </div>
  )
}

export default SideMenu