import Events from "../../Components/Events";
import Banner from "../../Layouts/Header/Banner/Banner";
import About from "../About/About";
import Team from "./Team";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Events></Events>
            <Team></Team>
        </div>
    );
};

export default Home;