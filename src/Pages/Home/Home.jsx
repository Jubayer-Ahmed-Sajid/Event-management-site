import Events from "../../Components/Events";
import Banner from "../../Layouts/Header/Banner/Banner";
import About from "../About/About";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Events></Events>
        </div>
    );
};

export default Home;