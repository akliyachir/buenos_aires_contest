import "./HeaderMain.css"
import LogoHeader from "./01_LogoHeader/LogoHeader"
import NavCluster from "./02_NavCluster/NavCluster"

export default function HeaderMain() {
  return (
    <div className="HeaderMain">
     <LogoHeader/>
     <NavCluster/>
    </div>
  )
}
