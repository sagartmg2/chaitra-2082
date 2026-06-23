import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/products/ProductDetail";
import ProductListing from "./pages/products/ProductListing";
import RootLayout from "./components/layouts/RootLayout";
import Signup from "./pages/Signup";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = createBrowserRouter([
    {
      path: "",
      // Component: RootLayout,
      element: <RootLayout isLoggedIn={isLoggedIn} />,
      children: [
        { path: "/", Component: Home },
        { path: "/login",
          //  Component: Login\
           element:<Login setIsLoggedIn={setIsLoggedIn}/>
           },
        { path: "/register", Component: Signup },
        {
          path: "/products",
          children: [
            {
              path: "",
              Component: ProductListing,
            },
            {
              path: "detail",
              Component: ProductDetail,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
