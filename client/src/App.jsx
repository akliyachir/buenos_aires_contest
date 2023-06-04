
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
// -- pages import
import RootLayout from "./Pages/01_RootLayout";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} ></Route>
  )
)

function App() {

  return (
<RouterProvider router={router}/>
  )
}

export default App
