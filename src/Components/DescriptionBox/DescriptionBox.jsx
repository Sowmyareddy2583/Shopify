import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="description-nav">
        <div className="nav-box">Description</div>
        <div className="nav-box fade">Reviews (122)</div>
      </div>
      <div className="description-box">
        <p>
          Welcome to Shopify, your one-stop shop for quality products across
          various categories like fashion, electronics, home goods, and more. We
          offer competitive prices, secure shopping, and exceptional customer
          service to ensure a seamless shopping experience. Enjoy fast and
          reliable shipping, plus a hassle-free return policy. Join our
          community for exclusive offers and the latest trends. Happy shopping!
        </p>
        <p>
          "I had a fantastic experience shopping at Shopify. The website is easy
          to navigate, and the product selection is impressive. My order arrived
          quickly, and the customer service team was very helpful with my
          questions. I highly recommend this site for anyone looking for quality
          products and great deals!"
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
