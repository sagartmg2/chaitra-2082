import { createBrowserRouter, RouterProvider } from "react-router";
import Todos from "./Todos";
import Courses from "./Courses";
import Counter from "./Counter";
import ChangeTheme from "./ChangeTheme";
import GoogleTabs from "./GoogleTabs";
import Header from "./components/layout/Header";
import TodosCrud from "./TodosCrud";
import Modal from "./Modal";
import ProductsListApi from "./ProductsListApi";
import ProductsListApiAutoLoad from "./ProductsListApiAutoLoad";
import ProductDetail from "./ProductDetail";
import Home from "./pages/Home";
import TodosCrudOwnApi from "./TodosCrudOwnApi";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", Component: Home },
    { path: "/todos", Component: TodosCrudOwnApi },
    { path: "/products", Component: ProductsListApiAutoLoad },
    { path: "/products/:id", Component: ProductDetail },
  ]);

  return <RouterProvider router={router} />;

  return (
    <div className="">
      {/* <Header /> */}
      {/* <Courses /> */}
      {/* <Todos />
      <Counter /> */}
      {/* <ChangeTheme /> */}
      {/* <GoogleTabs /> */}
      {/* <footer>footer</footer> */}
      {/* <TodosCrud/> */}
      {/* <Modal/> */}
      {/* <ProductsListApi /> */}
      {/* <ProductsListApiAutoLoad /> */}
    </div>
  );
}
