import About from "../About/About";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Menu from "../Menu/Menu";
import Recommend from "../Recommend/Recommend";


const Home = () => {
    return (
        <div>
            <Banner />
            <Features />
            <About />
            <Menu />
            <Recommend />
        </div>
    );
};

export default Home;