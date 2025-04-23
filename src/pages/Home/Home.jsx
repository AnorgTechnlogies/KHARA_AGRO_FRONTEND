import React, { useState } from "react";
import "./Home.css"
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
// import AppDownload from "../../components/AppDownload/AppDownload";
import BestFeatures from "../../components/BestFeatures/BestFeatures";
import ServiceImages from "../../components/ServiceImages/ServiceImages";
import { ShoppingCart } from "lucide-react";

const Home = () => {
  const handleAmazonClick = () => {
    window.open("https://www.amazon.in/s?k=khara+agrotech&i=grocery&crid=KJ5E826HWM9B&sprefix=khara+agrotech%2Cgrocery%2C269&ref=nb_sb_noss", "_blank");
  };

  const [category, setCategory] = useState("All");

  return (
    <>
      <Header />
      <ExploreMenu setCategory={setCategory} category={category} />
      <FoodDisplay category={category} />
      {/* <AppDownload/> */}
      <BestFeatures />

      <div className="AmazonPage-container">
        <header className="AmazonPage-header">
          <h1 className="AmazonPage-title">Welcome to Khara Agrotech</h1>
          <p className="AmazonPage-subtitle">
            Quality Agricultural Products Available on Amazon
          </p>
          <button
            onClick={handleAmazonClick}
            className="AmazonPage-amazon-button"
          >
            <ShoppingCart className="AmazonPage-button-icon" />
            Shop on Amazon
          </button>
        </header>
      </div>

      
      <ServiceImages />
    </>
  );
};

export default Home;
