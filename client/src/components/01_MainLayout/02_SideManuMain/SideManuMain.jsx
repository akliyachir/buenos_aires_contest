import { useContext } from "react"
import "./SideManuMain.css"
import { MenuToggleContext } from "../../../context/MenuContext";
import {AiOutlineCloseCircle} from "react-icons/ai"


export default function SideManuMain() {
const {isMenuOpen, setIsMenuOpen} = useContext(MenuToggleContext);

return (
    <div className={isMenuOpen ? "SideManuMainOpen" : "SideManuMainClosed"}>
      <div className="closeIconSideMenu" onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
     <AiOutlineCloseCircle/>
      </div>
    </div>
  )
}
