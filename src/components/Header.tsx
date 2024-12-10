import React from 'react';
import Link from 'next/link';
import { IoIosSearch } from "react-icons/io";
import { CgShoppingCart } from "react-icons/cg";
import { FaRegCircleUser } from "react-icons/fa6";

const Header: React.FC = () => {
  return (
    <header className="w-full">
      {/* Top Header */}
      <div className="w-full h-[70px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 relative">
        {/* Search Icon */}
        <IoIosSearch className="w-6 h-6 text-[#2A254B] sm:w-5 sm:h-5 md:w-6 md:h-6" />

        {/* Avion Text */}
        <h1 className="text-2xl font-clash-display font-[400] text-[#000] sm:text-xl md:text-2xl text-center mx-auto flex-1">
          Avion
        </h1>

        {/* Shopping Cart Icon - Hidden on small screens */}
        <CgShoppingCart className="w-6 h-6 text-[#2A254B] sm:w-5 sm:h-5 md:w-6 md:h-6 hidden sm:block" />

        {/* Profile Icon - Hidden on small screens */}
        <FaRegCircleUser className="w-6 h-6 text-[#2A254B] sm:w-5 sm:h-5 md:w-6 md:h-6 p-[1px] hidden sm:block" />
      </div>

      {/* Border between headers */}
      <div className="w-full h-0 border-t border-[#0000001A] mt-2"></div>

      {/* Bottom Header */}
      <div className="w-full h-[62px] mx-auto flex items-center justify-center px-4 sm:px-6 md:px-8">
        {/* Navigation links for larger screens */}
        <div className="w-full hidden sm:flex md:w-[675px] h-[22px] items-center justify-between gap-6 sm:gap-4 text-center sm:flex-wrap sm:justify-evenly">
          {['Plant pots', 'Ceramics', 'Tables', 'Chairs', 'Crockery', 'Tableware', 'Cutlery'].map((item, index) => (
            <Link href={`/${item.toLowerCase().replace(' ', '-')}`} key={index} legacyBehavior>
              <a
                className="font-satoshi text-[16px] font-[400] leading-[21.6px] text-[#726E8D] hover:underline whitespace-nowrap"
              >
                {item}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
