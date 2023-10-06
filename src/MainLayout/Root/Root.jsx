import { Outlet } from "react-router-dom";
import NavBar from "../../Layouts/Header/NavBar";
import Footer from "../../Layouts/Footer/Footer";

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;