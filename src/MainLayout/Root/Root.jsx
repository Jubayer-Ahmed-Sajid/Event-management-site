import { Outlet } from "react-router-dom";
import NavBar from "../../Layouts/Header/NavBar";
import Footer from "../../Layouts/Footer/Footer";

const Root = () => {
    return (
        <div className="font-display">
            <div className="max-w-6xl mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
           
        </div>
    );
};

export default Root;