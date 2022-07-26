import logoImage from "../assets/logo.png";
import { useState } from "react";
const Navbar = (props) => {
  const [showHamburgerMenu, setToggleHamburgerMenu] = useState(false);
  let hamburgerClasses = `block hamburger md:hidden focus:outline-none ${
    showHamburgerMenu ? "open" : ""
  }`;
  let menuClasses =
    `absloute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold ${!showHamburgerMenu? "hidden" : ''} bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md `;
  const toggleHamburgerMenuHandler = () => {
    setToggleHamburgerMenu((prevState) => !prevState);
  };
  return (
    <nav className="relative container p-6  mx-auto ">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logoImage} alt="" />
        </div>
        <div className="hidden md:flex menu space-x-6">
          <a className="hover:text-darkGrayishBlue" href="#">
            Pricing
          </a>
          <a className="hover:text-darkGrayishBlue" href="#">
            Product
          </a>
          <a className="hover:text-darkGrayishBlue" href="#">
            About us
          </a>
          <a className="hover:text-darkGrayishBlue" href="#">
            Careers
          </a>
          <a className="hover:text-darkGrayishBlue" href="#">
            Community
          </a>
        </div>
        <a
          href="#"
          className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >
          Get started
        </a>
        <button
          onClick={toggleHamburgerMenuHandler}
          id="menu-btn"
          className={hamburgerClasses}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="md:hidden">
        <div
          id="menu"
          className={menuClasses}
        >
          <a className="hover:text-darkGrayishBlue" href="#">
            Pricing
          </a>
          <a className="hover:text-darkGrayishBlue" href="#">
            Product
          </a>
          <a className="hover:text-darkGrayishBlue" href="#">
            About us
          </a>
          <a className="hover:text-darkGrayishBlue" href="#">
            Careers
          </a>
          <a className="hover:text-darkGrayishBlue" href="#">
            Community
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
