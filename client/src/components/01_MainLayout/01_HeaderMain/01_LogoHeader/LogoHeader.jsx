import {MdOutlineCopyright} from "react-icons/md"
import { NavLink } from "react-router-dom";

import "./LogoHeader.css";
export default function LogoHeader() {
  return (
    <div className="LogoHeader">
      
      <h1 className="LogoHeaderText" >
        <span className="logoBoldPart">
        BUENOSAIRES
        </span>
        <span className="logoNoneBoldPart">
        CONTEST
        </span>
         </h1>
    </div>
  )
}
