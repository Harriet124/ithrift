import "../Nav1.css";
import logo from "../../../assets/20231105_165612.png";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";

const MobileSignUpNav = () => {
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const toggleMenu = () => {
    setIsDropDownActive((prev) => !prev);
  };

  return (
    <>
      <nav className="mobile-nav-primary">
        <div>
          <div className="logo-wrapper">
            <div className="nav-logo">
              <img src={logo} alt="iThrift-logo" />
              <p>iThrift</p>
            </div>
          </div>
          <HamburgerMenu
            isDropDownActive={isDropDownActive}
            toggleMenu={toggleMenu}
          />
        </div>
      </nav>
      <div
        className={`extended-menu ${
          isDropDownActive ? "drop-down-active" : ""
        }`}
      >
        <a href="#sign-up">Sign up</a>
        <a href="/login">Log in</a>
      </div>
    </>
  );
};

export default MobileSignUpNav;