import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Cart/Cart.jsx";
import Checkout from "./Checkout/Checkout.jsx";
import Home from "./Home/Home.jsx";
import Store from "./Store/Store.jsx";
import ErrorPage from "./ErrorPage.jsx";
import "../index.css";

export default function Router() {
  const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <ErrorPage /> },
    { path: "checkout", element: <Checkout /> },
    { path: "cart", element: <Cart /> },
    { path: "store", element: <Store /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
