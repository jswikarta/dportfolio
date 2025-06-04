import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Asset from "../pages/asset/Asset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project/asset",
    element: <Asset />,
  },
]);

export default router;
