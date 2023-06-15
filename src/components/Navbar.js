import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="font-sans flex flex-col bg-gray-400 text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6  shadow sm:items-baseline w-full">
        <div className="  mb-2 sm:mb-0">
          <p className="text-2xl no-underline text-grey-darkest hover:text-blue-dark text-white ">
            ZIMO APP
          </p>
        </div>
        <div className="text-white">
          <Link
            href="/about"
            className="text-lg no-underline mr-10 font-bold text-grey-darkest hover:text-blue-dark ml-2"
          >
            About Us
          </Link>
          <Link
            href="/zimocard"
            className="text-lg no-underline mr-10 font-bold text-grey-darkest hover:text-blue-dark ml-2"
          >
            Zimo Card
          </Link>
          <Link
            href="/multistep"
            className="text-lg no-underline mr-10 font-bold  text-grey-darkest hover:text-blue-dark ml-2"
          >
            Multi-Step Form
          </Link>
          <Link
            href="/todo"
            className="text-lg no-underline mr-10  font-bold text-grey-darkest hover:text-blue-dark ml-2"
          >
            Todo Crud
          </Link>
          <Link
            href="/products"
            className="text-lg no-underline mr-10 font-bold  text-grey-darkest hover:text-blue-dark ml-2"
          >
            Cart
          </Link>
          <Link
            href="/signup"
            className="text-lg no-underline mr-10 font-bold  text-grey-darkest hover:text-blue-dark ml-2"
          >
            Sign-Up
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
