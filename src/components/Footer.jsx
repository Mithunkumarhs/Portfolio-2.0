import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-400 py-6 border-t border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-sm sm:text-base tracking-wide"
      >
        <span>2025 © All Rights Reserved.</span>
        <br className="sm:hidden" />
        <span className="text-gray-500"> by <span className="text-violet-400 font-semibold">MKHS</span></span>
      </motion.div>
    </footer>
  );
};

export default Footer;
