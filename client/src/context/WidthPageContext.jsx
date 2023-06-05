import { createContext, useState } from "react";

export const WidthPageContext = createContext(0);

export default function WidthPageContextProvider({children}) {
 
 const [PageWidth, setPageWidth] = useState(0);
 return(
  <WidthPageContext.Provider value={{PageWidth, setPageWidth}}>
{children}
  </WidthPageContext.Provider>
 )
}