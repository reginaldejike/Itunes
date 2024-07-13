import "./Product.scss";
import { FaHeart } from "react-icons/fa";
import { Items } from "../../type/Item";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Items;
  toggleLike?: (id: any) => void;
  addToCart?: (product: Items) => void;
  liked?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  toggleLike,
  addToCart,
  liked,
}) => {
  const baseUrl = "https://api.timbu.cloud/images/";
  const imageUrl = product.photos?.[0]?.url
    ? `${baseUrl}${product.photos[0].url}`
    : "";
  return (
    <div key={product.id} className="card">
      {toggleLike && product && (
        <FaHeart
          size="2rem"
          onClick={() => toggleLike(product.id)}
          className={liked ? "dislike-heart" : "heart"}
        />
      )}
      <img className="product-card-logo" src={imageUrl} alt={product.name} />
      <p className="brand-name">{product.name}</p>
      <p className="brand-info">{product.description}</p>
      <Link to={`/product/${product.id}`} className="more">
        {" "}
        more details
      </Link>
      <h3 className="brand-price">NGN {product.current_price[0].NGN}</h3>
      {addToCart && product && (
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
