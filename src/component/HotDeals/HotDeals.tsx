import "./HotDeals.scss";
import { useOutletContext } from "react-router-dom";
import { Product, Products } from "../../type/type";
import ProductCard from "../ProductCard/ProductCard";
import Spinner from "../Spinner/Spinner";

interface Props {
  product: Products;
  toggle: (id: number) => void;
  likedProduct: number[];
  search: string;
  addToCart: (product: Product) => void;
  loading: boolean;
}

const HotDeals = () => {
  const { product, toggle, likedProduct, search, addToCart, loading } =
    useOutletContext<Props>();

  const filteredProducts = product.filter((prod) =>
    prod.brandName.toLowerCase().includes(search.toLowerCase())
  );

  // if(filteredProducts.length<0)

  return (
    <>
      <div className="hot-deal" id="hotDeal">
        <h1>Hot Deals</h1>
        <div className="card-wrapper" id="card">
          {loading ? (
            <Spinner />
          ) : (
            filteredProducts.map((p) => (
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
        <div className="buttom-div"></div>
      </div>
    </>
  );
};

export default HotDeals;
