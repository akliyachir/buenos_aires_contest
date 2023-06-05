import "./HamburgerButton.css";
import { MenuToggleContext } from "../../../../../../context/MenuContext";
import { useContext } from "react";

export default function HamburgerButton() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuToggleContext);

  return (
    <a href="#haut">
      <div
        className="HamburgerButton"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </a>
  );
}
