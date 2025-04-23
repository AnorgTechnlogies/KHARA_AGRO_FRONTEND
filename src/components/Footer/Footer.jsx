import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="FooterLogoDiv">
            <Link to="/">
              <img className="Footerlogo" src={assets.logo1} alt="" />
            </Link>
            <p className="navbar-p">उत्तम स्वाद और गुणवत्ता की पहचान</p>
          </div>
          <p>
            Ideal for Everyday Dishes: Bhogprada broken rice is a dream come
            true for busy cooks. Unlike whole rice varieties, it requires
            minimal soaking time, making it perfect for whipping up quick and
            delicious South Indian staples. Unlocking Flavorful Depths: The
            unique aging process enhances the inherent flavor of the rice,
            resulting in idlis and dosas that burst with taste in every bite.
            The broken rice absorbs spices and lentil batters more effectively,
            ensuring your favorite dishes are not just fluffy and crispy but
            also bursting with South Indian flavors.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        {/* <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div> */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li className="flex items-center gap-2">
              <MapPin size={20} />
              RAMCHANDRA BADA, INFRONT OF GRAMPANCHAYAT, Village Khara, Tehsil
              KIRNAPUR, District Balaghat, MADHYA PRADESH, INDIA, Pin 481226
            </li>
            <li className="flex items-center gap-2">
              <Phone size={20} />
              +91 9174207069
            </li>
            <li className="flex items-center gap-2">
              <Mail size={20} />
              kharaagrotech@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright © {new Date().getFullYear()} All rights reserved | This
        template is made with ❤️ by{" "}
        <a
          href="https://kharaagrotech.com"
          target="_blank"
          rel="noopener noreferrer"
          className="CopyRightKharaAgroTech"
        >
          KHARA AGROTECH
        </a>
      </p>
    </div>
  );
};

export default Footer;
