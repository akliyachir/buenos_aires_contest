
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,  } from "react-router-dom";
// -- context

// -- pages import
import GlobalRootContainer from "./Pages/00_GlobalRootContainer";
import ArticleBodyTemplate from "./Pages/03_ArticleBodyTemplate";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<GlobalRootContainer/>} >
        <Route path="/article/:art_link_params" element={<ArticleBodyTemplate/>}/>
    </Route>
  )
)

function App() {

  return (
        <RouterProvider router={router}/>
  )
}
export default App
