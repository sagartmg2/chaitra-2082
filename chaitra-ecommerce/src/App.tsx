import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/products/ProductDetail";
import ProductListing from "./pages/products/ProductListing";
import RootLayout from "./components/layouts/RootLayout";
import Signup from "./pages/Signup";
import { useEffect, useState } from "react";
import axios from "axios";
import { setUser } from "./redux/features/userSlice";
import { useDispatch } from "react-redux";

function App() {
  let token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(token ? true : false);

  useEffect(() => {
    if (token) {
      axios
        .get("https://ecom-zb9o.vercel.app/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(setUser(res.data));
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "",
      // Component: RootLayout,
      element: <RootLayout />,
      children: [
        { path: "/", Component: Home },
        {
          path: "/login",
          //  Component: Login\
          element: <Login />,
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
              path: ":slug",
              Component: ProductDetail,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <p className="text-5xl font-bold">is loading.......</p>
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;
