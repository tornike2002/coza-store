import { Fragment, useState } from "react";
import NavLogo from "../../assets/navbar/logo.png";
import { Link } from "react-router-dom";
import {
  ShoppingFilled,
  HeartFilled,
  BarsOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Burgermenu from "../burgermenu/Burgermenu";
const Navbar: React.FC = () => {
  const [burger, setBurger] = useState<boolean>(false);
  const BurgerMenuHandler = () => {
    setBurger((value) => !value);
  };
  return (
    <Fragment>
      <div className="container py-5">
        <div className="flex items-center px-5 2xl:px-0">
          <div>
            <img src={NavLogo} alt="NavLogo" />
          </div>
          <div className="flex justify-end items-center w-full max-w-full md:justify-between">
            <div className="hidden  gap-5 font-Poppins text-navlinks text-sm pl-10 md:flex ">
              <Link
                className="hover:text-navlinksHover transition-all duration-500 ease
               active:text-navlinksHover font-medium"
                to="/"
              >
                Home
              </Link>
              <Link
                className="hover:text-navlinksHover transition-all duration-500 ease
               active:text-navlinksHover font-medium"
                to="/"
              >
                Shop
              </Link>
              <Link
                className="hover:text-navlinksHover transition-all duration-500 ease
               active:text-navlinksHover font-medium"
                to="/"
              >
                Features
              </Link>
              <Link
                className="hover:text-navlinksHover transition-all duration-500 ease
               active:text-navlinksHover font-medium"
                to="/"
              >
                Blog
              </Link>
              <Link
                className="hover:text-navlinksHover transition-all duration-500 ease
               active:text-navlinksHover font-medium"
                to="/"
              >
                About
              </Link>
              <Link
                className="hover:text-navlinksHover transition-all duration-500 ease
               active:text-navlinksHover font-medium"
                to="/"
              >
                Contact
              </Link>
            </div>
            <div className="flex gap-5 text-sm md:text-xl">
              <ShoppingFilled
                className="text-gray-500 
              hover:text-navlinksHover transition-all duration-500 ease cursor-pointer"
              />
              <HeartFilled
                className="text-red-400 cursor-pointer
               hover:text-navlinksHover transition-all duration-500 ease"
              />
              {!burger ? (
                <BarsOutlined
                  onClick={BurgerMenuHandler}
                  className="md:hidden text-navlinks
              hover:text-navlinksHover transition-all duration-500 ease cursor-pointer"
                />
              ) : (
                <CloseOutlined
                  onClick={BurgerMenuHandler}
                  className="md:hidden text-navlinks
                hover:text-navlinksHover transition-all duration-500 ease cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
        <div className="bg-burger px-5 2xl:px-0">{burger && <Burgermenu />}</div>
      </div>
    </Fragment>
  );
};

export default Navbar;
