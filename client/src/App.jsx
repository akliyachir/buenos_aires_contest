
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,  } from "react-router-dom";
// -- context

// -- pages import
import GlobalRootContainer from "./Pages/00_GlobalRootContainer";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<GlobalRootContainer/>} >
        
    </Route>
  )
)

function App() {

  return (
        <RouterProvider router={router}/>
  )
}
export default App
