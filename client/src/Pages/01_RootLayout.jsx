import "./01_RootLayout.css"

import HeaderMain from "../components/01_MainLayout/01_HeaderMain/HeaderMain";
import { useContext } from "react";
import { MenuToggleContext } from "../context/MenuContext";
import ArticlesListBodyLanding from "./02_ArticlesListBodyLanding";



export default function RootLayout() {
  const {isMenuOpen} = useContext(MenuToggleContext)
  return (
    <div className= {isMenuOpen ?  "RootLayoutOpen" : "RootLayoutClosed"}>
      <HeaderMain/>
      <ArticlesListBodyLanding/>
    </div>
  )
}
