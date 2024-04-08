import React, { useEffect, useState, useRef } from "react";
import {
  BsLinkedin,
  BsSearch,
  BsHouseDoorFill,
  BsFillChatDotsFill,
  BsFillBellFill,
} from "react-icons/bs";
import { IoBagHandle } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { BsPersonCircle, BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../Home.css";
import { useNavigate } from "react-router-dom";
import Logout from "../../../Element/Logout/Logout";

const Header = (prop) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const homeRef = useRef();
  const networkRef = useRef();
  const massageRef = useRef();
  const profileRef = useRef();
  const jobsRef = useRef();
  const notificationRef = useRef();

  const LogoutClick = () => {
    setIsOpen(true);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const goToRoute = (rout) => {
    navigate(rout);
  };

  useEffect(() => {
    const currentURL = window.location.href;
    if (currentURL.includes("home")) {
      //  homeRef.current.children[0].className.animVal = "default-selected";
      // console.log(homeRef.current.children[0].className.animVal);
    }
  }, []);

  return (
    <header>
      <nav className="nav-container p-2">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex justify-center items-center gap-3 rounded-lg">
            <BsLinkedin className="logo-icon-light text-4xl" />
            <div className="search-container flex p-1 justify-center items-center gap-2 rounded-lg">
              <BsSearch className="" />
              <input
                placeholder="Search"
                className="input-search max-lg-w-64 flex-wrap lg:pr-28"
              />
            </div>
          </div>
          <a href="/" className="text-white text-2xl font-bold"></a>

          {/* Menu icon for mobile */}
          <div className="block lg:hidden max-lg:flex max-lg:ml-3 max-lg:justify-center max-lg:items-center">
            <button>
              {" "}
              <BsList className="max-lg:block hidden nav-icon" />
            </button>
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.01 3.41L3.42 2l6.36 6.36L16.14 2l1.41 1.41L11.2 10.78l5.19 5.19-1.41 1.42L9.79 12.2l-7.37 7.36-1.41-1.41L8.38 11.79 2.01 5.41l1.41-1.42z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 6H4V5h16v1zM4 11h16v-1H4v1zm16 4H4v-1h16v1z"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu items */}
          {}
          <div
            className={`lg:flex lg:items-center lg:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex">
              <Link to="/home" className="text-black px-4 py-2">
                <span
                  ref={homeRef}
                  className="flex flex-col justify-center items-center"
                >
                  <BsHouseDoorFill className="nav-icon default-selected" />
                  <span className="nav-icon-text"> Home</span>
                </span>
              </Link>
              <Link to="/network" className="text-black px-4 py-2">
                <span
                  ref={networkRef}
                  className="flex flex-col justify-center items-center"
                >
                  <MdPeopleAlt className="nav-icon" />
                  <span className="nav-icon-text"> My Network</span>
                </span>
              </Link>

              <Link to="/jobs" className="text-black px-4 py-2">
                <span
                  ref={jobsRef}
                  className="flex flex-col justify-center items-center"
                >
                  <IoBagHandle className="nav-icon" />
                  <span className="nav-icon-text"> Jobs</span>
                </span>
              </Link>
              <Link to="/messaging" className="text-black px-4 py-2">
                <span
                  ref={massageRef}
                  className="flex flex-col justify-center items-center"
                >
                  <BsFillChatDotsFill className="nav-icon" />
                  <span className="nav-icon-text"> Messaging</span>
                </span>
              </Link>
              <Link to="/notifications" className="text-black px-4 py-2">
                <span
                  ref={notificationRef}
                  className="flex flex-col justify-center items-center"
                >
                  <BsFillBellFill className="nav-icon" />
                  <span className="nav-icon-text"> Notification</span>
                </span>
              </Link>
            </ul>
            <Link to="/profile" className="text-black px-4 py-2">
              <span
                ref={profileRef}
                onClick={LogoutClick}
                className="flex flex-col justify-center items-center"
              >
                <BsPersonCircle className=" nav-icon" />
                <span className="nav-icon-text">Me</span>
              </span>
              <Logout id="logout" isOpen={isOpen} setIsOpen={setIsOpen} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
