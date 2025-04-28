import { motion } from "framer-motion";

const LoadingComponents = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <motion.div
        className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <p className="mt-4 text-gray-600 text-lg font-semibold">Loading...</p>
    </div>
  );
};

export default LoadingComponents;
