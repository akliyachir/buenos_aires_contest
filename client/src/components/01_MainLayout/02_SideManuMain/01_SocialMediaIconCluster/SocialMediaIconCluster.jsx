import "./SocialMediaIconCluster.css"
import {RiFacebookBoxFill, RiInstagramFill, RiMailFill, RiTwitterFill} from "react-icons/ri"


export default function SocialMediaIconCluster() {
  return (
    <div className='SocialMediaIconCluster'>
     <a href="http://" target="_blank" rel="noopener noreferrer">
     <RiFacebookBoxFill/>
     </a>
     <a href="http://" target="_blank" rel="noopener noreferrer">
     <RiInstagramFill/>

     </a>
     <a href="http://" target="_blank" rel="noopener noreferrer">

     <RiMailFill/>
     </a>
     <a href="http://" target="_blank" rel="noopener noreferrer">

     <RiTwitterFill/>
     </a>
    </div>
  )
}
