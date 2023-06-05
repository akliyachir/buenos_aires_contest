import "./NavCluster.css"

import HamburgerButton from "./01_NavClusterComponents/01_HamburgerButton/HamburgerButton";
import RechercheButton from "./01_NavClusterComponents/02_RechercheButton/RechercheButton";
import IdiomaSwitch from "./01_NavClusterComponents/03_IdiomaSwitch/IdiomaSwitch";
import { useContext } from "react";
import { WidthPageContext } from "../../../../context/WidthPageContext";


export default function NavCluster() {
  const {PageWidth} = useContext(WidthPageContext);
  return (
    <div className="NavCluster">
      <div>{PageWidth}</div>
     <IdiomaSwitch/>
     <RechercheButton/>
     <HamburgerButton/>
    </div>
  )
}
