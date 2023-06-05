import "./NavCluster.css";

import HamburgerButton from "./01_NavClusterComponents/01_HamburgerButton/HamburgerButton";
import RechercheButton from "./01_NavClusterComponents/02_RechercheButton/RechercheButton";
import IdiomaSwitch from "./01_NavClusterComponents/03_IdiomaSwitch/IdiomaSwitch";

export default function NavCluster() {
  return (
    <div className="NavCluster">
      <IdiomaSwitch />
      <RechercheButton />
      <HamburgerButton />
    </div>
  );
}
