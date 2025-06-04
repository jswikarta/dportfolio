import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Asset from "../pages/asset/Asset";

const router = createBrowserRouter([
  {
    path: "/dportfolio",
    element: <Home />,
  },
  {
    path: "/dportfolio/project/asset",
    element: <Asset />,
  },
]);

export default router;
