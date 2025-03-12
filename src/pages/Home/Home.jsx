import Banner from "./Banner";
import Services from "../Services/Services";
import Clients from "./Clients";
import Team from "./Team";

const Home = () => {
    return (
        <div>
                <Banner></Banner>
                <Services></Services>
                <Clients></Clients>
                <Team></Team>
        </div>
    );
};

export default Home;