import "./01_RootLayout.css";

import { useContext } from "react";
import { MenuToggleContext } from "../context/MenuContext";

export default function RootLayout() {
  const { isMenuOpen } = useContext(MenuToggleContext);
  return (
    <div className={isMenuOpen ? "RootLayoutOpen" : "RootLayoutClosed"}>
      {/*  <HeaderMain/> */}
    </div>
  );
}
