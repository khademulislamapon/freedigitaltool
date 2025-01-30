import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import SeenOn from "../SeenOn/SeenOn";

const Root = () => {
    return (
        <div className="bg-[#F6F8FA]">
            <header className="">
                <NavBar />
            </header>
            <body className="">
                <Outlet />
                <SeenOn />
            </body>
            <footer className="">
                <Footer />
            </footer>
        </div>
    );
};

export default Root;