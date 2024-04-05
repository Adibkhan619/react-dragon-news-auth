import logo from "../../../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <p className="font-poppins text-xl text-gray-600">Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            
        </div>
    );
};

export default Header;