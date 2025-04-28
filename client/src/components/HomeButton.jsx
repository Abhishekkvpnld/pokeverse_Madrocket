import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomeButton = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
      whileTap={{ scale: 0.9, rotate: -5, y: 5 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <Link
        to="/list"
        className="inline-block px-6 py-2 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 transition duration-300"
      >
        Show All
      </Link>
    </motion.div>
  );
};

export default HomeButton;
