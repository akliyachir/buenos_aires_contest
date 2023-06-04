import { useContext } from "react"
import "./SideManuMain.css"
import { MenuToggleContext } from "../../../context/MenuContext";
import {AiOutlineCloseCircle} from "react-icons/ai"
import SocialMediaIconCluster from "./01_SocialMediaIconCluster/SocialMediaIconCluster";


export default function SideManuMain() {
const {isMenuOpen, setIsMenuOpen} = useContext(MenuToggleContext);

return (
    <div className={isMenuOpen ? "SideManuMainOpen" : "SideManuMainClosed"}>
      <div className="closeIconSideMenu" onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
     <AiOutlineCloseCircle/>
      </div>
        <SocialMediaIconCluster/>
      <div className="menuItemsList">
        <ul>
          <li>Menu item stuff</li>
          <li>Menu item stuff</li>
          <li>Menu item stuff</li>
          <li>Menu item stuff</li>
          <li>Menu item stuff</li>
        </ul>
      </div>
    </div>
  )
}
