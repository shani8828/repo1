import { Link, useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import logo from "../assets/optima2025-logo.png";
import { navDropdown, navigation } from "../constants/Navlinks";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const location = useLocation();

  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link className="flex items-center gap-1 w-[15rem] xl:mr-8" to="/">
          <img src={logo} alt="Optima" className="w-[200px] md:w-[230px]" />
        </Link>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-start justify-center m-auto lg:flex-row lg:justify-end">
            <Link
              to={"/about"}
              onClick={handleClick}
              className={`block relative font-code text-xl uppercase transition-colors hover:text-color-1 px-3 xl:px-4 py-4 md:py-6 lg:-mr-0.25 lg:text-sm lg:font-semibold ${
                location.pathname === "/about" // Check if the current page matches the URL
                  ? "text-color-1" // Apply purple color for active page
                  : "text-n-1/50"
              } lg:leading-5 lg:hover:text-n-1`}
            >
              About
            </Link>
            <div className="relative group">
              <button
                onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen);
                  className = "text-purple-500";
                }}
                className={`relative font-code text-xl uppercase transition-colors text-n-1/50  px-3 pr-0 xl:px-4 py-4 md:py-6 lg:-mr-0.25 lg:text-sm lg:font-semibold  lg:leading-5 lg:hover:text-n-1 `}
              >
                Events ▼
              </button>
              {isDropdownOpen && (
                <div className="relative lg:absolute lg:top-16 lg:left-0 group-hover:block text-black bg-transparent  lg:bg-black/80 rounded-lg  w-48">
                  {navDropdown.map((item) => (
                    <a
                      href={item.url}
                      className={`flex items-start gap-1 text-n-1/50 hover:text-color-1  mb-1 font-code uppercase text-lg transition-colors px-3 xl:px-4 py-2 md:py-4 lg:-mr-0.25 lg:text-sm lg:font-semibold lg:leading-5 lg:hover:text-n-1`}
                    >
                      {/* <div className="-rotate-90 text-xs lg:text-lg">▼</div> */}
                      <div className="">→</div>
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                onClick={handleClick}
                className={`block relative font-code text-xl uppercase transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-3 xl:px-4 py-4 md:py-6 lg:-mr-0.25 lg:text-sm lg:font-semibold ${
                  location.pathname === item.url // Check if the current page matches the URL
                    ? "text-color-1" // Apply purple color for active page
                    : "text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
