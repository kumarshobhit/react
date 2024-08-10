import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
Link;

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} alt='' />
      </div>
      <div className='nav-items'>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/About'>
            <li>About</li>
          </Link>
          <Link to='Contact'>
            <li>Contact Us</li>
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
