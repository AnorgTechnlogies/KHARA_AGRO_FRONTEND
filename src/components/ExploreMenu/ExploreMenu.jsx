import React, { useContext } from "react";
import "./ExploreMenu.css";
import { StoreContext } from "../../Context/StoreContext";

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);

  return (
    <div className="explore-menu" id="explore-menu">
      <div className="home-discription">
        <h1>
          Welcome to <span className="red-color">Makhana House</span>
        </h1>
        <p>
          Discover the purity of <span className="makhana-highlight">100% natural Makhana (Fox Nuts)</span>, 
          sourced directly from organic farms. Our makhanas are gluten-free, low in calories, 
          and rich in protein, making them the perfect healthy snack for every occasion.
        </p>

        {/* Why Choose Our Makhana Section */}
        <div className="makhana-benefits">
          <h2 style={{textAlign: 'center', marginBottom: '15px', color: '#333'}}>
            Why Choose Our Makhana?
          </h2>
          <div className="benefit-list">
            <span className="benefit-item">🌿 100% Natural</span>
            <span className="benefit-item">🔥 Low Calorie</span>
            <span className="benefit-item">💪 High Protein</span>
            <span className="benefit-item">🌾 Gluten-Free</span>
            <span className="benefit-item">❤️ Heart Healthy</span>
            <span className="benefit-item">⚡ Energy Boosting</span>
          </div>
        </div>

        {/* Explore Our Makhana Flavors Section */}
        <div className="flavors-section">
          <h2>Explore Our Makhana Flavors</h2>
          <p className="explore-menu-text">
            Choose from our wide range of <span className="makhana-highlight">expertly crafted makhana flavors</span>. 
            Each variant is made with premium ingredients and traditional recipes to deliver 
            authentic taste with health benefits.
          </p>
        </div>
      </div>

      {/* Makhana Flavors List */}
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
                alt={item.menu_name}
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