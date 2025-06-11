import React, { useContext } from "react";
import "./ExploreMenu.css";
import { StoreContext } from "../../Context/StoreContext";

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);

  return (
    <div className="explore-menu" id="explore-menu">
      <div className="home-discription">
        <h1>
          Welcome to <span className="red-color">Khara AgroTech</span>
        </h1>
        <p>
          <strong>Your Trusted Online Agro Store in India</strong> — Khara
          AgroTech is your one-stop destination to buy organic rice, pulses, and
          grains online. We bring you premium-quality agro products sourced
          directly from Indian farmers, delivered fresh to your doorstep.
          Whether you're looking for Idli Rice, Biryani Rice, Chana Dal, Urad
          Dal, or Thick Poha, we ensure top-notch quality, hygienic packaging,
          and affordable pricing. Our flagship brand <strong>Bhogprada</strong>
          represents purity, tradition, and trust, offering you the finest agro
          products with a seamless online shopping experience and 24/7 customer
          support. We aim to be India’s most reliable AgroTech brand. Experience
          the best of Indian agriculture with Khara AgroTech and
          <strong>Bhogprada</strong> – the leading agro product supplier in
          Gondia and across Maharashtra.
        </p>
        <h1>Explore our Food Basket</h1>

        <p className="explore-menu-text">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
      </div>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                src={item.menu_image}
                className={category === item.menu_name ? "active" : ""}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
