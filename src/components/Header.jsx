// Header.jsx (replace your existing file; visuals unchanged)
import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiGithub, FiLinkedin, FiLink, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Skills", to: "/skills" },
    { name: "Experience", to: "/experience" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-extrabold text-xl mr-3">
            M
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Mithun Kumar H S
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="lg:flex hidden space-x-14">
          {navLinks.map((link, index) => (
            <NavLink key={link.name} to={link.to} className="relative">
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                }}
                className={({ isActive }) =>
                  `text-gray-300 font-medium group transition-colors duration-300 ${
                    isActive ? "text-purple-300" : ""
                  }`
                }
              >
                {link.name}
              </motion.span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
            </NavLink>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="md:flex hidden items-center space-x-6">
          <motion.a
            href="https://github.com/Mithunkumarhs"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>

          <motion.a
            href="www.linkedin.com/in/mithun-kumar-hs"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>

          <motion.a
            href="mailto:mkhs202011@gmail.com"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="relative group text-gray-700 dark:text-gray-300 
             hover:text-violet-600 dark:hover:text-violet-400 
             transition-colors duration-300"
          >
          <FiLink className="w-5 h-5" />

          <span
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 
               text-xs text-purple-300 bg-gray-800 rounded 
               opacity-0 group-hover:opacity-100 transition-opacity duration-300 
               whitespace-nowrap"
          >
          Alternate: mkhs202011@gmail.com
         </span>
         </motion.a>

          <motion.button
            onClick={() => {
              // navigate to contact page by using an anchor to keep header code unchanged visually
              window.location.href = "/contact";
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="ml-2 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 
                       text-violet-700 font-bold hover:from-violet-700 hover:to-purple-200 
                       hover:text-white transition-all duration-500 cursor-pointer"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile*/}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="md:hidden flex items-center"
        >
          <motion.button whileTap={{ scale: 0.7 }} onClick={toggleMenu} className="text-gray-300">
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.5 }}
        className="md:hidden overflow-hidden bg-gray-950/95 backdrop-blur-md shadow-lg
                   px-4 py-5 space-y-5 border-t border-gray-800"
      >
        <nav className="flex flex-col space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 font-medium py-2 hover:text-purple-400 transition-colors"
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="pt-4 border-t border-gray-700">
          <div className="flex space-x-5">
            <a href="https://github.com/Mithunkumarhs" target="_blank" rel="noopener noreferrer">
              <FiGithub className="h-5 w-5 text-gray-300 hover:text-purple-400 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/mithun-kumar-hs" target="_blank" rel="noopener noreferrer">
              <FiLinkedin className="h-5 w-5 text-gray-300 hover:text-purple-400 transition-colors" />
            </a>
            <a href="mailto:mkhs202011@gmail.com" rel="noopener noreferrer">
              <FiLink className="h-5 w-5 text-gray-300 hover:text-purple-400 transition-colors" />
            </a>

          </div>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 block w-full text-center px-4 py-2 rounded-lg
                       bg-gradient-to-r from-violet-600 to-violet-400 font-bold text-white 
                       hover:from-violet-700 hover:to-purple-500 transition-all"
          >
            Contact Me
          </NavLink>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
