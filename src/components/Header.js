import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onelineStatus = useOnlineStatus();

  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} alt='' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Online Status : {onelineStatus ? "🟢" : "❌"}</li>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/About'>
            <li>About</li>
          </Link>
          <Link to='/Contact'>
            <li>Contact Us</li>
          </Link>
          <Link to='/Grocery'>
            <li>Grocery</li>
          </Link>
          <li>Cart</li>
          <button
            className='login'
            onClick={() =>
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login")
            }>
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
