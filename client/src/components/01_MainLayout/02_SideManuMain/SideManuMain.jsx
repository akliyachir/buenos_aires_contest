import "./SideManuMain.css"
import { useContext } from "react"
import { MenuToggleContext } from "../../../context/MenuContext";
import {AiOutlineCloseCircle} from "react-icons/ai"
import SocialMediaIconCluster from "./01_SocialMediaIconCluster/SocialMediaIconCluster";
import { ItemSideMenuList } from "./02_ItemSideMenu/ItemSideMenuList";

export default function SideManuMain() {
const {isMenuOpen, setIsMenuOpen} = useContext(MenuToggleContext);

return (
    <div className={isMenuOpen ? "SideManuMainOpen" : "SideManuMainClosed"}>
      <div className="closeIconSideMenu" onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
     <AiOutlineCloseCircle/>
      </div>
        <SocialMediaIconCluster/>
      <div className="menuItemsList">
          {
            ItemSideMenuList.map(item=>{
              const {
                side_menu_item_id,
                side_menu_item_name,
                side_menu_item_icon,
              } = item;
              return(
                <div key={side_menu_item_id} className="side_menu_item_container">
                    <div className="side_menu_item_icon">{side_menu_item_icon}</div>
                    <div className="side_menu_item_name">{side_menu_item_name}</div>
                </div>
              )
            })
          }
      </div>
    </div>
  )
}
