import { createContext } from 'react';


export const MenuActivationContext = createContext(false);

export default function MenuActivationContextProvider({children}) {
  
const [menuIsOpen, setMenuIsOpen] = useState(true)

 return (

<MenuActivationContext.Provider value={{menuIsOpen, setMenuIsOpen}} >
 {children}
</MenuActivationContext.Provider>
  )
}
