import "./LogoHeader.css";
import { MdOutlineCopyright } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function LogoHeader() {
  return (
    <div className="LogoHeader">
      <NavLink to={"/"}>
        <h1 className="LogoHeaderText">
          <span className="logoBoldPart">BUENOSAIRES</span>
          <span className="logoNoneBoldPart">CONTEST</span>
        </h1>
      </NavLink>
    </div>
  );
}
