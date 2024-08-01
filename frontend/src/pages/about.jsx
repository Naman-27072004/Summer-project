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
import '../Styles/about.css'

function About() {
    return <div>
        <div>
            <h1>Our Story</h1>
            <p>Welcome to Electrohub, your premier online store for top-quality electronic items. From the latest smartphones and laptops to cutting-edge home appliances and accessories, ElectroHub offers a vast selection of products to meet all your tech needs. Our website is designed for easy navigation, allowing you to quickly find and compare the newest gadgets and best brands. With secure payment options, fast shipping, and dedicated customer support, shopping for electronics has never been easier. Discover unbeatable deals and the latest innovations at ElectroHub, where technology meets convenience.</p>
        </div>

        <div className="about-us">
            <div>
                <CiShop className="about-logo" size={25}/>
                <p>amount of sellers</p>
                <p>Sellers active at our site</p>
            </div>
            <div>
                <CiDollar className="about-logo" size={25}/>
                <p>amount of sale</p>
                <p>Monthly sale</p>
            </div>
            <div>
                <MdOutlineShoppingBag className="about-logo" size={25}/>
                <p>amount of customer</p>
                <p>Customer active at our site</p>
            </div>
            <div>
                <FaSackDollar className="about-logo" size={25}/>
                <p>amount of sale</p>
                <p>Yearly sale</p>
            </div>
        </div>

        <div className="founder">
            <div>
                <img src="" alt="" />
                <p>Ritik</p>
                <p>designation</p>
                <div className="social-media"><CiTwitter />
                    <FaInstagram />
                    <FaLinkedinIn /></div>

            </div>
            <div>
                <img src="" alt="" />
                <p>Naman</p>
                <p>designation</p>
                <div className="social-media"><CiTwitter />
                    <FaInstagram />
                    <FaLinkedinIn /></div>
            </div>
            <div>
                <img src="" alt="" />
                <p>Shitij</p>
                <p>designation</p>
                <div className="social-media"><CiTwitter />
                    <FaInstagram />
                    <FaLinkedinIn /></div>
            </div>
            <div>
                <img src="" alt="" />
                <p>Kushang</p>
                <p>designation</p>
                <div className="social-media"><CiTwitter />
                    <FaInstagram />
                    <FaLinkedinIn /></div>
            </div>
        </div>

        <div className="our-term about-us">
            <div>
                <TbTruckDelivery className="about-logo" size={25}/>
                <p>FREE AND FAST DELIVERY</p>
                <p>Free delivery for all orders over amount</p>
            </div>
            <div>
                <RiCustomerService2Fill className="about-logo" size={25}/>
                <p>24/7 CUSTOMER SERVICE</p>
                <p>Friendly 24/7 customer support</p>
            </div>
            <div>
                <MdAssuredWorkload className="about-logo" size={25}/>
                <p>MONEY BACK GUARANTEE</p>
                <p>We return money within 30 days</p>
            </div>
        </div>

    </div>
}
export default About;