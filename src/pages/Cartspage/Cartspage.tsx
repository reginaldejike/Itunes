import { BsCart4 } from "react-icons/bs";
import "./Cartspage.scss";
import { Product } from "../../type/type";
import { useOutletContext } from "react-router-dom";

interface Props {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Cartspage = () => {
  const { cart, setCart } = useOutletContext<Props>();

  const handleIncrease = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };
  return (
    <>
      <div className="cart-page">
        <div className="cart-page-content">
          <div className="cart-info">
            <span className="cart-title">
              <BsCart4 size={"2rem"} /> <h3>Cart</h3>
            </span>
            <p>{cart.length} items in your cart</p>
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
                {cart.map((product) => (
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
                        <button
                          onClick={() => handleDecrease(product.id)}
                          className="decrease"
                        >
                          -
                        </button>
                        <p>{product.quantity}</p>
                        <button
                          onClick={() => handleIncrease(product.id)}
                          className="increase"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>{parseInt(product.price) * product.quantity}</td>
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
