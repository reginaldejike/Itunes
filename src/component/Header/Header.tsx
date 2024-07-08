import { NavLink } from "react-router-dom";
import logo from "../../assets/images/itunelogo4.svg";
import { BsCart4 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

import { IoIosClose } from "react-icons/io";
import "./Header.scss";
import { useState } from "react";
const Header = () => {
  const [ismobile, setIsmobile] = useState<boolean>(false);

  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <NavLink to={"/"} className="logo-wrapper">
            <img src={logo} alt="logo" className="logo" />
          </NavLink>
          <div className={!ismobile ? "navigation-links" : "mobile-view"}>
            <NavLink to={"/"} className="nav-item">
              <p>All Products</p>
            </NavLink>
            <NavLink to={"/cart"} className="nav-item">
              <BsCart4 size={"2rem"} />
              <p>Cart</p>
            </NavLink>
            <NavLink to={"/"} className="nav-item">
              <CiHeart size={"2rem"} />
              <p>Wishlist</p>
            </NavLink>
            <NavLink to={"/"} className="nav-item">
              <FaRegUser size={"2rem"} />
              <p>Account</p>
            </NavLink>
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
