import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="flex justify-between shadow-md sticky top-0 z-50 bg-white">
      <div className="">
        <img src={LOGO_URL}  className="w-20"/>
      </div>
      <div>
        <ul className="flex justify-between">
          <li className="m-4 p-4"><Link to='/'>Home</Link></li>
          <li className="m-4 p-4"><Link to='/about'>About Us</Link></li>
          <li className="m-4 p-4"><Link to='/contact'>Contact Us</Link></li>
          <li className="m-4 p-4">Cart</li>
          <button
            className="mr-2"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
