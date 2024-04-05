import LeftNavBar from "../LeftNavBar/LeftNavBar";
import RIghtNavBar from "../RightNavBar/RIghtNavBar";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h1 className="font-poppins text-3xl">Its my Home</h1>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
                <div className="border ">
                    <LeftNavBar></LeftNavBar>
                </div>
                <div className="md:col-span-2 col-span-1 border">
                    <h3 className="text-4xl">News Coming Soon....</h3>
                </div>
                <div className="border ">
                    <RIghtNavBar></RIghtNavBar>
                </div>
            </div>
        </div>
    );
};

export default Home;