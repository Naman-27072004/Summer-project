import { CiShop } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdAssuredWorkload } from "react-icons/md";
import avatar5 from "/assets/avatar5.jpg"
import avatar6 from "/assets/avatar6.jpg"
import avatar7 from "/assets/avatar7.jpg"
import avatar8 from "/assets/avatar8.jpg"

import "../Styles/about.css";

function About() {
  return (
    <div>
      <div>
        <h1 className="heading">Our Story</h1>
        <p className="paragraph">
          Welcome to Tech Bazaar, your premier online store for top-quality
          electronic items. From the latest smartphones and laptops to
          cutting-edge home appliances and accessories, Tech Bazaar offers a vast
          selection of products to meet all your tech needs. Our website is
          designed for easy navigation, allowing you to quickly find and compare
          the newest gadgets and best brands. With secure payment options, fast
          shipping, and dedicated customer support, shopping for electronics has
          never been easier. Discover unbeatable deals and the latest
          innovations at Tech Bazaar, where technology meets convenience.
        </p>
      </div>
      <div className="about-us">
        <div className="about-us-item">
          <CiShop className="about-logo" size={25} />
          <p className="amount">33k</p>
          <p className="description">Sellers active at our site</p>
        </div>
        <div className="about-us-item">
          <CiDollar className="about-logo" size={25} />
          <p className="amount">33k</p>
          <p className="description">Monthly sale</p>
        </div>
        <div className="about-us-item">
          <MdOutlineShoppingBag className="about-logo" size={25} />
          <p className="amount">33k</p>
          <p className="description">Customer active at our site</p>
        </div>
        <div className="about-us-item">
          <FaSackDollar className="about-logo" size={25} />
          <p className="amount">33k</p>
          <p className="description">Yearly sale</p>
        </div>
      </div>
      <div className="founder">
        <div className="founder-item">
            <img src={avatar7} alt="" />
          <p>Ritik</p>
          <p>designation</p>
          <div className="social-media">
            <CiTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="founder-item">
        <img src={avatar8} alt="" />
          <p>Naman</p>
          <p>designation</p>
          <div className="social-media">
            <CiTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="founder-item">
        <img src={avatar6} alt="" />
          <p>Shitij</p>
          <p>designation</p>
          <div className="social-media">
            <CiTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="founder-item">
        <img src={avatar5} alt="" />
          <p>Kushang</p>
          <p>designation</p>
          <div className="social-media">
            <CiTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <div className="our-term about-us">
        <div className="about-us-item">
          <TbTruckDelivery className="about-logo" size={25} />
          <p className="amount">FREE AND FAST DELIVERY</p>
          <p className="description">Free delivery for all orders over amount</p>
        </div>
        <div className="about-us-item">
          <RiCustomerService2Fill className="about-logo" size={25} />
          <p className="amount">24/7 CUSTOMER SERVICE</p>
          <p className="description">Friendly 24/7 customer support</p>
        </div>
        <div className="about-us-item">
          <MdAssuredWorkload className="about-logo" size={25} />
          <p className="amount">MONEY BACK GUARANTEE</p>
          <p className="description">We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
}
export default About;
