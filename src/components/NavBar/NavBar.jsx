import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png"

const NavBar = () => {
    return (
        <div className="bg-white">
        <div className="navbar p-0 bg-white w-11/12 mx-auto">
            <div className="flex-1">
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                <Link to="/">
                    <img src={Logo} alt="" />
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {/* <li><a>Link</a></li> */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default NavBar;