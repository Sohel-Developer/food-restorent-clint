import About from "../About/About";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Menu from "../Menu/Menu";
import Recommend from "../Recommend/Recommend";
import Review from "../Review/Review";


const Home = () => {
    return (
        <div>
            <Banner />
            <Features />
            <About />
            <Menu />
            <Recommend />
            <Review />
        </div>
    );
};

export default Home;