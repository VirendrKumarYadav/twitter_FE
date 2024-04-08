import { createBrowserRouter } from "react-router-dom";
import Home from "../componant/home/Home";
import HomeNav from "../componant/PagesNav/Home";
import DashboardNav from "../componant/PagesNav/Dashboard";


export const Router = createBrowserRouter([
  {
    path: "/home",
    element: <div>
      <HomeNav />
    </div>,
  },
  {
    path: "/",
    element: <div>
      <DashboardNav />
    </div>,
  },

]);
