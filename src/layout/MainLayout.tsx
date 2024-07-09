import { useEffect, useState } from "react";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import { Outlet } from "react-router-dom";
import { Product, Products } from "../type/type";

const MainLayout = () => {
  const [product, setProduct] = useState<Products>([]);
  const [likedProduct, setLikedProduct] = useState<number[]>([]);
  const [search, setSearch] = useState<string>("");
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, []);

  const toggle = (id: any) => {
    if (likedProduct.includes(id)) {
      setLikedProduct(likedProduct.filter((prodId) => prodId !== id));
    } else {
      setLikedProduct([...likedProduct, id]);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const convertPriceToInteger = (price: string): number => {
    // Remove "NGN"
    const withoutCurrency = price.replace("NGN", "");
    // Remove commas
    const withoutCommas = withoutCurrency.replace(/,/g, "");
    // Convert to integer
    const priceInteger = parseInt(withoutCommas, 10);

    return priceInteger;
  };

  const calculateTotalPrice = (): number => {
    return cart.reduce((total, product) => {
      return total + convertPriceToInteger(product.price) * product.quantity;
    }, 0);
  };

  const discount = (): number => {
    return calculateTotalPrice() * 0.02;
  };

  const total = (): number => {
    return calculateTotalPrice() - discount();
  };

  return (
    <>
      <Header cart={cart} />
      <Outlet
        context={{
          product,
          toggle,
          likedProduct,
          search,
          setSearch,
          addToCart,
          cart,
          setCart,
          convertPriceToInteger,
          calculateTotalPrice,
          discount,
          total,
        }}
      />
      <Footer />
    </>
  );
};

export default MainLayout;
