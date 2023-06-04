import { createContext, useState } from 'react';


export const MenuToggleContext = createContext(false);

export default function MenuToggleContextProvider({children}) {
  
const [isMenuOpen, setIsMenuOpen] = useState(false)

 return (
<MenuToggleContext.Provider value={{isMenuOpen, setIsMenuOpen}} >
 {children}
</MenuToggleContext.Provider>
  )
}
