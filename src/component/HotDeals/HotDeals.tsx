import "./HotDeals.scss";
import { useOutletContext } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import Spinner from "../Spinner/Spinner";
import { Items } from "../../type/Item";

interface Props {
  product: Items[];
  toggle: (id: any) => void;
  likedProduct: string[];
  search: string;
  addToCart: (product: Items) => void;
  loading: boolean;
}

const HotDeals = () => {
  const { product, toggle, likedProduct, search, addToCart, loading } =
    useOutletContext<Props>();

  const filteredProducts = product.filter((prod) =>
    prod.name.toLowerCase().includes(search.toLowerCase())
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
