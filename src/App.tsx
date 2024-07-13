import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/Homepage";
import "./App.scss";
import Cartspage from "./pages/Cartspage/Cartspage";
import CheckOut from "./pages/PaymentInfo/CheckOut";
import ProductPage from "./pages/Product/ProductPage";
import ProductDetails from "./pages/ProductDetail/ProductDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/cart" element={<Cartspage />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
