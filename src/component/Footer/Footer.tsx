import footerLogo from "../../assets/images/footerlogo.png";
import arrowup from "../../assets/images/arrowup.png";
import "./Footer.scss";

const Footer = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="footer-wrapper">
        <div className="first-footer">
          <div className="first-footer-content">
            <div>
              <h2>Categories</h2>
              <ul>
                <li>Computers and accessories</li>
                <li>Smartphones and Tablets</li>
                <li>Wearable technology</li>
                <li>Audio and office Equipment</li>
                <li>Home and office Equipment</li>
                <li>Gaming</li>
                <li>Cameras and photography</li>
                <li>Networking and connectivity</li>
                <li>Storage and memory</li>
              </ul>
            </div>
            <div>
              <h2>Services</h2>
              <ul>
                <li>Cctv installation</li>
                <li>Network installation</li>
                <li>Dstv decoder installation</li>
                <li>Gotv decoder installation</li>
                <li>Dstv subscription</li>
                <li>Gotv subscription</li>
              </ul>
            </div>
            <div>
              <h2>Contact</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="second-footer">
          <div className="second-footer-content">
            {/* <form className="form-wrapper">
              <label htmlFor="newsletter" className="form-label">
                Newsletter
              </label>
              <div className="newsletter-wrapper">
                <div className="newsletter-input">
                  <CgMail size="2rem" />
                  <input
                    type="email"
                    id="newsletter"
                    className="input-element"
                  />
                </div>
                <button className="subcribe-button">Subscribe</button>
              </div>
            </form> */}
            <div className="group">
              <p>Mobile:</p> <span> 08123456789</span>
            </div>
            <div className="group">
              <p>Email:</p> <span>ituneintltech@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="third-footer">
          <img src={footerLogo} alt="footer-logo" className="footer-logo" />
          <p className="footer-note">&copy; 2024 ituneintltech</p>
          <img
            src={arrowup}
            alt="arrow up"
            className="arrow-up"
            onClick={handleScroll}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
