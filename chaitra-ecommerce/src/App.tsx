import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/products/ProductDetail";
import ProductListing from "./pages/products/ProductListing";
import RootLayout from "./components/layouts/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      Component: RootLayout,
      children: [
        { path: "/", Component: Home },
        { path: "/login", Component: Login },
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
