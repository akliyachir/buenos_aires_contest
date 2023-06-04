import RootLayout from './01_RootLayout'
import SideManuMain from '../components/01_MainLayout/02_SideManuMain/SideManuMain'
import MenuToggleContextProvider from '../context/MenuContext'


export default function GlobalRootContainer() {
 return (
   
   <MenuToggleContextProvider>
    <div className='GlobalRootContainer'>
     <SideManuMain/>
     <RootLayout/>
    </div>
   </MenuToggleContextProvider>
  )
}
