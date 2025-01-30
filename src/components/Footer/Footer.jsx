import Logo from "../../assets/logo.png"
import Wordpress from "../../assets/wordpress.png"
import API from "../../assets/apiLogo.png"
import { FiSend } from "react-icons/fi";
import { FaFacebookF, FaPinterestP, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-11/12 mx-auto pb-28">
            <section className="footer text-base-content py-10">
                <aside>
                    <img src={Logo} alt="" />
                    <h4 className="text-xl font-bold text-[#212530]">Contact Us</h4>
                    <p className="text-sm font-normal text-[#212530]">support@smallseotools.com</p>

                    <h4 className="text-xl font-bold text-[#212530]">Address</h4>
                    <p className="text-sm font-normal text-[#212530]">438, Streatham High Road London, UK. SW16 3PX</p>
                </aside>
                <nav>
                    {/* <h6 className="footer-title">Services</h6> */}
                    <Link to="/" className="link link-hover text-base font-semibold text-black">Branding</Link>
                    <Link to="/" className="link link-hover text-base font-semibold text-black">Design</Link>
                    <Link to="/" className="link link-hover text-base font-semibold text-black">Marketing</Link>
                    <Link to="/" className="link link-hover text-base font-semibold text-black">Advertisement</Link>
                </nav>
                <nav>
                    {/* <h6 className="footer-title">Company</h6> */}
                    <Link to="/about-us" className="link link-hover text-base font-semibold text-black">About us</Link>
                    <Link to="/contact-us" className="link link-hover text-base font-semibold text-black">Contact</Link>
                    <Link to="/" className="link link-hover text-base font-semibold text-black">Jobs</Link>
                    <Link to="/" className="link link-hover text-base font-semibold text-black">Press kit</Link>
                </nav>
                <nav>
                    {/* <h6 className="footer-title">Legal</h6> */}
                    <Link to="/terms-and-conditions" className="link link-hover text-base font-semibold text-black">Terms and Conditions</Link>
                    <Link to="/privacy-policy" className="link link-hover text-base font-semibold text-black">Privacy policy</Link>
                    <Link to="/cookies-policy" className="link link-hover text-base font-semibold text-black">Cookies Policy</Link>
                    <Link to="/disclaimer" className="link link-hover text-base font-semibold text-black">Disclaimer</Link>
                    <Link to="/dmca-generator" className="link link-hover text-base font-semibold text-black">DMCA Generator</Link>
                </nav>
            </section>

            <section className="flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-1/2 bg-white p-6 flex flex-col">
                    <h5 className="text-center">You May Like Our Most Popular Tools & Apps</h5>
                    <div className="flex items-center justify-center gap-2">
                        <img className="w-14 object-cover" src={API} alt="" />
                        <img className="w-14" src={Wordpress} alt="" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 bg-white p-6 flex flex-col">
                    <h5 className="text-center">Subscribe to our Newsletter & Stay updated</h5>
                    <div className="join w-full mb-5">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered join-item w-full"
                        />
                        <button className="btn bg-[#0162B8] hover:bg-[#0162B8] join-item text-white py-1.5 px-3">
                            <div className="text-2xl">
                                <FiSend />
                            </div>{" "}
                            Subscribe
                        </button>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center justify-center text-white bg-[#4267B2] w-10 h-10 rounded-full text-xl">
                            <FaFacebookF />
                        </div>
                        <div className="flex items-center justify-center text-white bg-[#1DA1F2] w-10 h-10 rounded-full text-xl">
                            <FaTwitter />
                        </div>
                        <div className="flex items-center justify-center text-white bg-[#FF0000] w-10 h-10 rounded-full text-xl">
                            <FaYoutube />
                        </div>
                        <div className="flex items-center justify-center text-white bg-[#F0002A] w-10 h-10 rounded-full text-xl">
                            <FaPinterestP />
                        </div>
                    </div>
                </div>
            </section>


            <p className="text-center mt-4">Copyright © 2012-2025 by SmallSEOTools.com All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;