import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../atoms/Button";
import Counter from "../molecules/Counter";
import { getProducts } from "../../util/api";
import Text from "../atoms/Text";

const CardLg = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProduct(data.find((item) => item.id === id));
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <>
      <div className="product_container">
        <Button
          aria-label="Back"
          id="back-btn"
          className="btn btn_icon btn_icon-m"
          action={() => navigate(-1)}
          iconClass="btn_icon-back"
        />
        <div className="product_content">
          <div className="product_img">
            <img src={product.img} alt={product.imgAlt} />
          </div>
          <div className="product_card">
            <div className="product_div product_div-info">
              <Text
                renderAs="p"
                content={product.price}
                className="product__price card__price"
              />
              <Text
                renderAs="h1"
                content={product.productName}
                className="product__h1"
              />
              <Text
                renderAs="h2"
                content={product.brand}
                className="product__brand"
              />
              <Text
                renderAs="h4"
                content={product.shortDescription}
                className="product__descript product__descript-short"
              />
              <Text
                renderAs="p"
                content={product.longDescription}
                className="product__descript product__descript-long"
              />
            </div>
          </div>
        </div>
        <Counter
          id={id}
          productData={{
            productName: product.productName,
            urlImg: product.img,
            price: product.price,
          }}
        />
        <Button
          aria-label="Buy"
          id="buy-btn"
          className="btn btn_secondary btn-m"
          label="Pagar"
        />
      </div>
    </>
  );
};

export default CardLg;
