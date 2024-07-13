import { useOutletContext } from "react-router-dom";
import ProductCard from "../../component/ProductCard/ProductCard";
import Spinner from "../../component/Spinner/Spinner";
import "./ProductPage.scss";
import { Items } from "../../type/Item";
import Pagination from "../../component/Pagination/Pagination";

interface Props {
  product: Items[];
  loading: boolean;
  addToCart: (product: Items) => void;
  likedProduct: any[];
  toggle: (id: any) => void;
}
const ProductPage = () => {
  const { product, toggle, likedProduct, addToCart, loading } =
    useOutletContext<Props>();

  return (
    <div className="product-container">
      <h1 className="available-products">Browse Available Products</h1>
      <div className="product-cards-wrapper">
        {loading ? (
          <Spinner />
        ) : (
          product.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              toggleLike={toggle}
              addToCart={addToCart}
              liked={likedProduct.includes(p.id)}
            />
          ))
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default ProductPage;
