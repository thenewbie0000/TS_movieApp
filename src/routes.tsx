import { createBrowserRouter } from "react-router-dom";
import TvSeries from "./pages/tvseries";
import Bookmark from "./pages/bookmark";
import Movie from "./pages/movie";
import Home from "./pages/home";
import Error from "./pages/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>
  },
  {
    path: "/movies",
    element: <Movie/>,
    errorElement: <Error/>
  },
  {
    path: "/tvseries",
    element: <TvSeries/>,
    errorElement: <Error/>
  },
  {
    path: "/bookmark",
    element: <Bookmark/>,
    errorElement: <Error/>
  },
])