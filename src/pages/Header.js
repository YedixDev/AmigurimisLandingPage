"use client";

import { motion } from "framer-motion";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import ImgLogo from "../assets/img/logo.jfif";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="w-full bg-gray-100 flex justify-around items-center gap-4 shadow-lg shadow-gray-700">
        <div className="w-20 h-20 rounded-full bg-white border-[3px] border-[#fb9a00] flex justify-center items-center my-1">
          <img
            className="w-14 h-14 m-1 rounded-xl"
            src={ImgLogo}
            alt="Logo Chepi"
          />
        </div>

        <div className="flex gap-10">
          <a
            href="#"
            className="font-lato font-bold text-xl px-4 transition-all duration-300 transform hover:scale-125 hover:text-[#fb9a00]"
          >
            Inicio
          </a>
          <a
            href="#"
            className="font-lato font-bold text-xl px-4 transition-all duration-300 transform hover:scale-125 hover:text-[#fb9a00]"
          >
            Más vendidos
          </a>
          <a
            href="#"
            className="font-lato font-bold text-xl px-4 transition-all duration-300 transform hover:scale-125 hover:text-[#fb9a00]"
          >
            Colecciones
          </a>
          <a
            href="#"
            className="font-lato font-bold text-xl px-4 transition-all duration-300 transform hover:scale-125 hover:text-[#fb9a00]"
          >
            Productos
          </a>
        </div>

        <div className="flex gap-5 text-4xl">
          <HiOutlineShoppingCart className="text-[#f24877] cursor-pointer  transition-all duration-300 hover:scale-150" />
          <HiOutlineUser className="text-[#f24877] cursor-pointer  transition-all duration-300 hover:scale-150" />
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
