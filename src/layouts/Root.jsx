import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="font-poppins max-w-6xl mx-auto">
            <h1>I am root!</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;