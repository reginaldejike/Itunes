import "./HotDeals.scss";
import { CiHeart } from "react-icons/ci";
import { useOutletContext } from "react-router-dom";
import { Products } from "../../type/type";

const HotDeals = () => {
  const products = useOutletContext<Products>();

  return (
    <>
      <div className="hot-deal">
        <h1>Hot Deals</h1>
        <div className="card-wrapper">
          {products.map((p) => (
            <div key={p.id} className="card">
              <CiHeart size="2rem" className="heart" />
              <img src={p.image} alt={p.brandName} />
              <p className="brand-name">{p.brandName}</p>
              <p className="brand-info">{p.brandInfo}</p>
              <h3 className="brand-price">{p.price}</h3>
              <button className="add-button">Add to cart</button>
            </div>
          ))}
        </div>
        <div className="buttom-div"></div>
      </div>
    </>
  );
};

export default HotDeals;
