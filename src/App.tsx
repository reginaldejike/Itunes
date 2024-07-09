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
import PaymentInfo from "./pages/PaymentInfo/PaymentInfo";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/cart" element={<Cartspage />} />
        <Route path="/paymentInfo" element={<PaymentInfo />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
