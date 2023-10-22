import { Fragment } from "react";
import { Link } from "react-router-dom";
const Burgermenu: React.FC = () => {
  return (
    <Fragment>
      <div
        className="flex flex-col gap-5 font-Poppins font-medium
       lg:hidden py-5 text-white mt-5"
      >
        <Link
          className="hover:px-2 transition-all duration-500 ease cursor-pointer"
          to="/"
        >
          Home
        </Link>
        <Link
          className="hover:px-2 transition-all duration-500 ease cursor-pointer"
          to="/"
        >
          Shop
        </Link>
        <Link
          className="hover:px-2 transition-all duration-500 ease cursor-pointer"
          to="/"
        >
          Features
        </Link>
        <Link
          className="hover:px-2 transition-all duration-500 ease cursor-pointer"
          to="/"
        >
          Blog
        </Link>
        <Link
          className="hover:px-2 transition-all duration-500 ease cursor-pointer"
          to="/"
        >
          About
        </Link>
        <Link
          className="hover:px-2 transition-all duration-500 ease cursor-pointer"
          to="/"
        >
          Contact
        </Link>
      </div>
    </Fragment>
  );
};

export default Burgermenu;
