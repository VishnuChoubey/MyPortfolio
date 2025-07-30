import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative flex items-center justify-center h-full z-10"
    >
      {/* Hexagon Avatar */}
      <div className="relative">
        <div className="rounded-full border-4 border-cyan-400 shadow-lg shadow-cyan-500/30 overflow-hidden bg-[#181c24]">
          <img
            src="/images/vishnuphoto_passportsize.jpeg"
            alt="Vishnu Choubey"
            className="w-52 h-52 object-cover"
            style={{ filter: "grayscale(0.2) contrast(1.1)" }}
          />
        </div>
        {/* Spinning Hexagon Outline */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <PiHexagonThin className="w-64 h-64 text-cyan-400 opacity-30 animate-spin-slow" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <PiHexagonThin className="w-72 h-72 text-orange-400 opacity-20 animate-spin-slow-rev" />
        </div>
      </div>
      <style>{`
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        .animate-spin-slow-rev {
          animation: spin-rev 18s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-rev {
          100% { transform: rotate(-360deg); }
        }
      `}</style>
    </motion.div>
  );
};

export default HeroPic;