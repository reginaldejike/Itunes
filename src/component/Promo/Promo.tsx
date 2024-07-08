import promoPic from "../../assets/images/promopic.png";
import "./Promo.scss";
const Promo = () => {
  return (
    <>
      <div className="promo-wrapper">
        <img src={promoPic} alt="promo picture" className="promo-pic" />
        <div className="buttom-div"></div>
      </div>
    </>
  );
};

export default Promo;
