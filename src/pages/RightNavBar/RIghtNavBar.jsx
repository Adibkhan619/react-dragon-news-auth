import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";

const RIghtNavBar = () => {
  return (
    <div>
      <div className="border p-4 space-y-3">
        <h2 className="text-2xl">Find Us On</h2>
        <button className="btn w-full">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn w-full">
          <FaGithub />
          Login with facebook
        </button>
      </div>
    </div>
  );
};

export default RIghtNavBar;
