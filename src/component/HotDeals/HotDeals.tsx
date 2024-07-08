import "./HotDeals.scss";
import product from "../../products.json";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import { Products } from "../../type/type";

const HotDeals = () => {
  const [liked, setLiked] = useState<Products[]>()

  // const toggle = (id:Products) =>{
  //   if(liked.includes(id)){
  //     set
  //   }
  // }
  return (
    <>
      <div className="hot-deal">
        <h1>Hot Deals</h1>
        <div className="card-wrapper">
          {product.products.map((p) => (
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
