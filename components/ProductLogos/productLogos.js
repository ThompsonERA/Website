import React from "react";
import Image from "next/image";
import Dawn from "../../public/assets/img/logo/dawn.jpg";
import Eco from "../../public/assets/img/logo/eco-friendly.jpg";
import Meyers from "../../public/assets/img/logo/meyers.png";
import Murphy from "../../public/assets/img/logo/murphy.jpg";
import Odoban from "../../public/assets/img/logo/odoban.png";

const ProductLogos = () => {
  return (
    <div
      className="container"
      style={{ marginBottom: "6rem", marginTop: "6rem" }}
    >
      <div className="banner-title">
        <h1 className="section_title">Cleaning products that we use</h1>
        <p className="product-description">
          We understand the potential risks associated with conventional
          cleaning products, which often contain harsh chemicals and toxins that
          can have adverse effects on both human health and the environment.
          These chemicals can contribute to indoor air pollution, exacerbate
          respiratory issues, and pose long-term health risks with repeated
          exposure.
        </p>
        <div className="banner-img">
          <Image src={Dawn} alt=""></Image>
          <Image src={Murphy} alt=""></Image>
          <Image src={Eco} alt=""></Image>
        </div>
        <div className="banner-img">
          <Image src={Odoban} alt=""></Image>
          <Image src={Meyers} alt=""></Image>
        </div>
      </div>
    </div>
  );
};

export default ProductLogos;
