import { createContext, useEffect, useState } from "react";

export const WidthPageContext = createContext(0);

export default function WidthPageContextProvider({children}) {
 
 const [PageWidth, setPageWidth] = useState(0);
 
 useEffect(()=> {
   setPageWidth(globalThis.innerWidth);
  }, []);
  
  useEffect(()=>{
   globalThis.addEventListener("resize", ()=>{
   setPageWidth(globalThis.innerWidth);
  })
  return globalThis.removeEventListener("resize", ()=>{
   setPageWidth(globalThis.innerWidth);
   })
 })

 return(
  <WidthPageContext.Provider value={{PageWidth, setPageWidth}}>
{children}
  </WidthPageContext.Provider>
 )
}