import Banner from "./Banner";
import Services from "../Services/Services";
import Clients from "./Clients";
import Team from "./Team";
import Tuition from "./Tuition";

const Home = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-950">
                <Banner></Banner>
                <Services></Services>
                <Tuition />
                <Clients></Clients>
                <Team></Team>
        </div>
    );
};

export default Home;