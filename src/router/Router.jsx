import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import NotFound from "../notfoundpage/NotFound";
import HomePage from "../pages/homePage/HomePage";
import Apps from "../pages/apps/Apps";
import InstallPage from "../pages/instalation/installPage";
import AppsDetails from "../pages/appdetails/AppsDetails";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
          path: "/",
          element: <HomePage></HomePage>,
          loader: () => fetch("/data.json"),

        },
        {
          path: "/apps",
          element: <Apps></Apps>
        },
         {
            path: "/apps/:id",
            element: <AppsDetails></AppsDetails>
         },
        {
          path: "/install",
          element: <InstallPage></InstallPage>
        }
      ],

    },

  ]
)