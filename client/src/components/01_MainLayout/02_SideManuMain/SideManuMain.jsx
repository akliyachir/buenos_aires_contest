import { useContext } from "react"
import "./SideManuMain.css"
import { MenuToggleContext } from "../../../context/MenuContext"


export default function SideManuMain() {
const {isMenuOpen} = useContext(MenuToggleContext);

 return (
    <div className={isMenuOpen ? "SideManuMainOpen" : "SideManuMainClosed"}>SideManuMain</div>
  )
}
