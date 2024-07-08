import { BsCart4 } from "react-icons/bs";
import product from "../../products.json";
import "./Cartspage.scss";
import { useState } from "react";

const Cartspage = () => {
  const [counter, setcounter] = useState<number>(0);
  const handleDecrease = (e: any) => {
    e.preventDefault();
    setcounter(counter - 1);
  };
  const handleIncease = (e: any) => {
    e.preventDefault();
    setcounter(counter + 1);
  };
  return (
    <>
      <div className="cart-page">
        <div className="cart-page-content">
          <div className="cart-info">
            <span className="cart-title">
              <BsCart4 size={"2rem"} /> <h3>Cart</h3>
            </span>
            <p>3 items in your cart</p>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>
                    <div className="t-head">
                      <p> Product</p>
                    </div>
                  </th>
                  <th>
                    <div className="t-head">
                      <p>Price </p>
                    </div>
                  </th>
                  <th>
                    <div className="t-head">
                      <p>Quatity</p>
                    </div>
                  </th>
                  <th>
                    <div className="t-head">
                      <p>Total Price</p>
                    </div>
                  </th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
                {product.products.map((product) => (
                  <tr key={product.id} className="data-row">
                    <div className="data-row-card">
                      <div className="img-card">
                        <img src={product.image} alt={product.brandName} />
                      </div>
                      <p>{product.brandName}</p>
                    </div>
                    <td>{product.price}</td>
                    <td>
                      <div className="quantity-btn">
                        <button onClick={handleDecrease} className="decrease">
                          -
                        </button>
                        <p>{counter}</p>
                        <button onClick={handleIncease} className="increase">
                          +
                        </button>
                      </div>
                    </td>
                    <td>{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="aggregate-section">
            <div className="aggregate-item">
              <p>Subtotal:</p> <span> N1,830,000.00</span>
            </div>
            <div className="aggregate-item">
              <p>discount:</p> <span> N100,000.00</span>
            </div>
            <div className="aggregate-item">
              <p>Total:</p> <span>N1,730,00</span>
            </div>
          </div>
          <button className="checkout-btn">Check out</button>
        </div>
      </div>
    </>
  );
};

export default Cartspage;
