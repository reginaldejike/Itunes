import "./Product.scss";
import { CiHeart } from "react-icons/ci";
import { Product } from "../../type/type";

interface ProductCardProps {
  product: Product;
  toggleLike?: (id: number) => void;
  addToCart?: (product: Product) => void;
  liked?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  toggleLike,
  addToCart,
  liked,
}) => {
  return (
    <div key={product.id} className="card">
      {toggleLike && product && (
        <CiHeart
          size="2rem"
          onClick={() => toggleLike(product.id)}
          className={liked ? "dislike-heart" : "heart"}
        />
      )}
      <img src={product.image} alt={product.brandName} />
      <p className="brand-name">{product.brandName}</p>
      <p className="brand-info">{product.brandInfo}</p>
      <h3 className="brand-price">{product.price}</h3>
      {addToCart && product && (
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
