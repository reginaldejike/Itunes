import { BsCart4 } from "react-icons/bs";
import "./Cartspage.scss";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Items } from "../../type/Item";

interface Props {
  cart: Items[];
  setCart: React.Dispatch<React.SetStateAction<Items[]>>;
  convertPriceToInteger: (price: string) => number;
  calculateTotalPrice: () => number;
  discount: () => number;
  total: () => number;
  removeFromCart: (productId: string) => void;
}

const Cartspage = () => {
  const {
    cart,
    setCart,
    calculateTotalPrice,
    discount,
    total,
    removeFromCart,
  } = useOutletContext<Props>();

  const navigate = useNavigate();
  const handleIncrease = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, available_quantity: item.available_quantity + 1 }
          : item
      )
    );
  };

  const handleDecrease = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              available_quantity: Math.max(item.available_quantity - 1, 1),
            }
          : item
      )
    );
  };

  const checkOut = () => {
    navigate("/checkout");
  };

  const baseUrl = "https://api.timbu.cloud/images/";

  return (
    <>
      <div className="cart-page">
        <div className="cart-page-content">
          <div className="cart-info">
            <span className="cart-title">
              <BsCart4 size={"3rem"} /> <h3>Cart</h3>
            </span>
            <p className="cart-lenght">{cart.length} items in your cart</p>
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
                        <img
                          src={`${baseUrl}${product.photos[0].url}`}
                          alt={product.name}
                          className="cart-image"
                        />
                      </div>
                      <p>{product.name}</p>
                    </div>
                    <td>{product.current_price[0].NGN}</td>
                    <td>
                      <div className="quantity-btn">
                        <button
                          onClick={() => handleDecrease(product.id)}
                          className="decrease"
                        >
                          -
                        </button>
                        <p>{product.available_quantity}</p>
                        <button
                          onClick={() => handleIncrease(product.id)}
                          className="increase"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      {`NGN${
                        product.current_price[0].NGN[0] *
                        product.available_quantity
                      }`}
                    </td>
                    <td>
                      <button
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                          e.preventDefault();
                          removeFromCart(product.id);
                        }}
                        className="Cart-remove-btn"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="aggregate-section">
            <div className="aggregate-item">
              <p>Subtotal:</p> <span> NGN{calculateTotalPrice()}</span>
            </div>
            <div className="aggregate-item">
              <p>discount:</p> <span> NGN{discount()}</span>
            </div>
            <div className="aggregate-item">
              <p>Total:</p> <span>NGN{total()}</span>
            </div>
          </div>
          <button className="checkout-btn" onClick={checkOut}>
            Check out
          </button>
        </div>
      </div>
    </>
  );
};

export default Cartspage;
