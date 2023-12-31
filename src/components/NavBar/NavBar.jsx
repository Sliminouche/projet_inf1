// NavBar.jsx
import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { navlinks } from "../../utils/Links";

const NavBarItem = ({ title, link, onClick }) => {
  return (
    <li
      onClick={() => onClick(link)}
      className="mx-4 cursor-pointer text-white hover:underline hover:text-gray-300 "
    >
      {title}
    </li>
  );
};

function Navbar() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const handleNavItemClick = (link) => {
    navigate(`/${link}`);
  };

  const handleToggleClick = () => {
    setToggle(!toggle);
  };

  return (
    <nav
      className="w-full flex md:justify-center justify-between p-4 items-center"
      style={{
        backgroundColor: '#1D201F',
        borderBottom: "100px",
        color: "white", // Change text color to white
      }}
    >
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <p className="flex flex-row gap-2 text-[20px] cursor-pointer" onClick={()=>handleNavItemClick('')}>Mem(usiqu)es</p>
      </div>

      <motion.ul
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100 }}
        transition={{ duration: 2 }}
        className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial"
      >
        {navlinks.map((item, index) => (
          <NavBarItem
            key={index}
            title={item.title}
            link={item.link}
            onClick={handleNavItemClick}
          />
        ))}
      </motion.ul>

      <div className="flex relative">
        {toggle ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={handleToggleClick}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={handleToggleClick}
          />
        )}

        {toggle && (
          <ul className="animate-slideright z-[100] bg-black bg-opacity-40 fixed top-0 -right-2 p-3 w-[60vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={handleToggleClick} />
            </li>
            {navlinks.map((item, index) => (
              <NavBarItem
                key={index}
                title={item.title}
                link={item.link}
                onClick={handleNavItemClick}
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
