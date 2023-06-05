import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// -- context

// -- pages import
import GlobalRootContainer from "./Pages/00_GlobalRootContainer";
import ArticleBodyTemplate from "./Pages/03_ArticleBodyTemplate";
import ArticlesListBodyLanding from "./Pages/02_ArticlesListBodyLanding";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<GlobalRootContainer />}>
      <Route path="/" element={<ArticlesListBodyLanding />} />
      <Route path="/article/:art_id" element={<ArticleBodyTemplate />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
