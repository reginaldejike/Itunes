/// <reference types="vite/client" />
import { useEffect, useState } from "react";
import "./ProductDetails.scss";
import { Items } from "../../type/Item";
import { useParams } from "react-router-dom";
import Spinner from "../../component/Spinner/Spinner";
const organisation_id = import.meta.env.VITE_ORGANISATION_ID;
const api_key = import.meta.env.VITE_API_KEY;
const app_id = import.meta.env.VITE_APP_ID;
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Items>({} as Items);
  const [loading, setloading] = useState<boolean>(true);

  const baseUrl = "https://api.timbu.cloud/images/";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://timbu-get-single-product.reavdev.workers.dev/${id}?organization_id=${organisation_id}&Appid=${app_id}&Apikey=${api_key}`
        );

        const data: Items = await res.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className="Product-details-wrapper">
      {loading ? (
        <Spinner />
      ) : (
        <div className="product-details">
          <div className="product-image">
            <img
              src={`${baseUrl}${product.photos[0].url}`}
              alt=""
              className="p-image"
            />
          </div>
          <div className="product-info">
            <h2>Product details</h2>
            <p className="item-control">
              {" "}
              <span>Product Name:</span> <span> {product.name}</span>
            </p>
            <p className="item-control">
              {" "}
              <span>Description:</span> <span>{product.description}</span>
            </p>
            <p>{}</p>
            <p className="item-control">
              <span>Status:</span>{" "}
              <span>
                {product.is_available == true ? "Available" : "Not Available"}
              </span>
            </p>
            <p className="item-control">
              {" "}
              <span>Quantity:</span> <span>{product.available_quantity}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
