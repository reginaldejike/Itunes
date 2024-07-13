import { useEffect, useState } from "react";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import { Outlet } from "react-router-dom";
import { Product } from "../type/type";
import { Items } from "../type/Item";

const MainLayout = () => {
  const [product, setProduct] = useState<Items[]>([]);
  const [likedProduct, setLikedProduct] = useState<number[]>([]);
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalpage, setTotalPage] = useState<number>();
  const [cart, setCart] = useState<Items[]>([]);
  const [loading, setloading] = useState<boolean>(true);
  const [prevPageUrl, setPrevPageUrl] = useState<string | null>(null);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
  const api_key = import.meta.env.VITE_API_KEY;
  const app_id = import.meta.env.VITE_APP_ID;
  const organisation_id = import.meta.env.VITE_ORGANISATION_ID;

  useEffect(() => {
    const fetchProduct = async (page: number) => {
      try {
        const res = await fetch(
          `/api/products?organization_id=${organisation_id}&reverse_sort=false&page=${page}&size=10&Appid=${app_id}&Apikey=${api_key}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data: Product = await res.json();
        setProduct(data.items);
        setTotalPage(Math.ceil(data.total / data.size));
        setPrevPageUrl(data.previous_page);
        setNextPageUrl(data.next_page);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    };

    fetchProduct(currentPage);
  }, [currentPage, api_key, app_id, organisation_id]);
  console.log({ totalpage });

  const handlePageChange = (url: string | null) => {
    if (url) {
      const urlParams = new URLSearchParams(url.split("?")[1]);
      const page = urlParams.get("page");
      if (page) {
        setCurrentPage(parseInt(page, 10));
      }
    }
  };

  const toggle = (id: any) => {
    if (likedProduct.includes(id)) {
      setLikedProduct(likedProduct.filter((prodId) => prodId !== id));
    } else {
      setLikedProduct([...likedProduct, id]);
    }
  };

  const addToCart = (product: Items) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, available_quantity: item.available_quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, available_quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  const calculateTotalPrice = (): number => {
    return cart.reduce((total, product) => {
      return (
        total + product.current_price[0].NGN[0] * product.available_quantity
      );
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
          calculateTotalPrice,
          discount,
          total,
          loading,
          removeFromCart,
          totalpage,
          currentPage,
          handlePageChange,
          prevPageUrl,
          nextPageUrl,
        }}
      />
      <Footer />
    </>
  );
};

export default MainLayout;
