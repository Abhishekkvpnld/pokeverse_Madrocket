import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-red-400 to-pink-500 text-white p-6">
      <motion.h1 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-extrabold mb-4"
      >
        404
      </motion.h1>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl mb-6"
      >
        Oops! Page not found.
      </motion.p>

      <Link 
        to="/"
        className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
