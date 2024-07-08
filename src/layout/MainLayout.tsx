import { useEffect, useState } from "react";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import { Outlet } from "react-router-dom";
import { Products } from "../type/type";

const MainLayout = () => {
  const [product, setProduct] = useState<Products>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("http://localhost:8000/products");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, []);
  return (
    <>
      <Header />
      <Outlet context={product} />
      <Footer />
    </>
  );
};

export default MainLayout;
