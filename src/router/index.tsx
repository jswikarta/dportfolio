import { createHashRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Asset from "../pages/asset/Asset";

const router = createHashRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "project/asset",
    element: <Asset />,
  },
]);

export default router;
