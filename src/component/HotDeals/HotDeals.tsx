import "./HotDeals.scss";
import { CiHeart } from "react-icons/ci";
import { useOutletContext } from "react-router-dom";
import { Product, Products } from "../../type/type";

interface Props {
  product: Products;
  toggle: (id: number) => void;
  likedProduct: number[];
  search: string;
  addToCart: (product: Product) => void;
}

const HotDeals = () => {
  const { product, toggle, likedProduct, search, addToCart } =
    useOutletContext<Props>();

  const filteredProducts = product.filter((prod) =>
    prod.brandName.toLowerCase().includes(search.toLowerCase())
  );

  // if(filteredProducts.length<0)

  return (
    <>
      <div className="hot-deal">
        <h1>Hot Deals</h1>
        <div className="card-wrapper">
          {filteredProducts.map((p) => (
            <div key={p.id} className="card">
              <CiHeart
                size="2rem"
                onClick={() => toggle(p.id)}
                className={
                  likedProduct.includes(p.id) ? "dislike-heart" : "heart"
                }
              />
              <img src={p.image} alt={p.brandName} />
              <p className="brand-name">{p.brandName}</p>
              <p className="brand-info">{p.brandInfo}</p>
              <h3 className="brand-price">{p.price}</h3>
              <button className="add-button" onClick={() => addToCart(p)}>
                Add to cart
              </button>
            </div>
          ))}
        </div>
        <div className="buttom-div"></div>
      </div>
    </>
  );
};

export default HotDeals;
