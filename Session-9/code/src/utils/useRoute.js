import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error";
import Body from "../components/Body";
import About from "../components/About";
import Profile from "../components/ProfileClassComponent";
import Contact from "../components/Contact";
import Cart from "../components/Cart";
import RestaurantMenu from "../components/RestaurantMenu";
import AppLayout from "../components/AppLayout";

const useRoute = () => {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
          children: [
            {
              path: "profile",
              element: <Profile />,
            },
          ],
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/restaurant/:resId",
          element: <RestaurantMenu />,
        },
      ],
    },
  ]);
  return appRoute;
};

export default useRoute;
