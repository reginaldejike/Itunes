import { BsCart4 } from "react-icons/bs";
import product from "../../products.json";
import "./Cartspage.scss";

const Cartspage = () => {
  return (
    <>
      <div className="cart-page">
        <div className="cart-page-content">
          <div>
            <BsCart4 size={"2rem"} /> <h3>Cart</h3>
          </div>
          <p>3 items in your cart</p>

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
                    <div className="card">
                      <img src={product.image} alt={product.brandName} />
                    </div>
                    <p>{product.brandName}</p>
                  </div>
                  <td>{product.price}</td>
                  <div>
                    <button>add</button>
                  </div>
                  <td>{product.price}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <p>Subtotal: N1,830,000.00</p>
            <p>discount: N100,000.00</p>
            <p>Total: N1,730,00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartspage;
