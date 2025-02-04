import { NavLink } from "react-router-dom";
import logo from "../../assets/images/itunelogo4.svg";
import { BsCart4 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import "./Header.scss";
import { useState } from "react";
import { Items } from "../../type/Item";

interface Props {
  cart: Items[];
}
const Header = ({ cart }: Props) => {
  const [ismobile, setIsmobile] = useState<boolean>(false);

  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <NavLink to={"/"} className="logo-wrapper">
            <img src={logo} alt="logo" className="logo" />
          </NavLink>
          <div className={!ismobile ? "navigation-links" : "mobile-view"}>
            <NavLink to={"/product"} className="nav-item">
              <p>All Products</p>
            </NavLink>

            <NavLink to={"/cart"} className="nav-item">
              <div className="cart">
                <BsCart4 size={"2rem"} />
                {cart.length > 0 && (
                  <span className="cart-count">{cart.length}</span>
                )}
              </div>
              <p>Cart</p>
            </NavLink>
            {/* <NavLink to={"/"} className="nav-item">
              <CiHeart size={"2rem"} />
              <p>Wishlist</p>
            </NavLink>
            <NavLink to={"/"} className="nav-item">
              <FaRegUser size={"2rem"} />
              <p>Account</p>
            </NavLink> */}
          </div>
          <button
            className="mobile-view-icon"
            onClick={() => {
              setIsmobile(!ismobile);
            }}
          >
            {ismobile ? (
              <>
                <IoIosClose size={"2.5rem"} />
              </>
            ) : (
              <>
                <RxHamburgerMenu size={"2.5rem"} />
              </>
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
