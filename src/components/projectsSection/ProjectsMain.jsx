import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Enhanced fadeIn with 3D rotation
const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : -40,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    rotateX: 15, // 3D tilt effect
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    rotateX: 0,
    transition: { 
      delay, 
      duration: 0.9, 
      type: "spring",
      bounce: 0.4 
    },
  },
});

const projects = [
  {
    name: "CheckIt – Delhi Bus Live Tracking System",
    year: "Mar 2025",
    align: "right",
    image: "/images/checkit_img.png",
    link: "https://checkitbus.vercel.app/",
    description:
      "Real-time bus tracking app using Spring Boot, WebSocket, Redis, and GTFS-Realtime data. Features include ETA prediction using OSRM, PostGIS stop snapping, live updates with Redis pub/sub, and secure role-based access.",
  },
  {
    name: "KabadiHunt – Location-Based Scrap Collection",
    year: "Dec 2024",
    align: "left",
    image: "/images/kabadiHunt_img.png",
    link: "https://kabadihunt.vercel.app/",
    description:
      "A full-stack scrap collection platform built with React, Spring Boot, and MongoDB. Includes CNN-based scrap classification, Razorpay payment integration, location-based kabadi matching, and secure JWT authentication.",
  },
  {
    name: "Portfolio Website",
    year: "Mar 2025",
    align: "right",
    image: "/images/portfolio.png",
    link: "https://MyPortfolio.vercel.app/",
    description:
      "My personal portfolio built with React and Tailwind CSS. Highlights key projects, contact info, and my full-stack tech stack including React, Spring Boot, Redis, and more.",
  },
];

const ProjectsMain = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div 
      id="projects" 
      className="max-w-[1200px] mx-auto px-4 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y: yBg }}
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {/* Animated grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMEg0MFY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEwMCwyNTUsMjE4LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]"></div>
        </div>
      </motion.div>

      {/* Section Title with enhanced glow */}
      <motion.div
        variants={fadeIn("top")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="flex flex-col items-center mt-[100px] relative">
          <h2 className="text-6xl mb-10 font-mono font-extrabold bg-gradient-to-r from-cyan-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent tracking-widest uppercase relative">
            <span className="drop-shadow-[0_0_8px_rgba(100,255,218,0.6)] animate-pulse-slow">
              PROJECTS
            </span>
            <span className="absolute -inset-4 bg-cyan-500 rounded-xl blur-2xl opacity-20 -z-10"></span>
          </h2>
          <p className="text-lg text-center text-gray-300 max-w-2xl font-mono">
            I have worked on a variety of web development projects, ranging from
            responsive websites to full-stack applications.
          </p>
        </div>
      </motion.div>

      {/* Project Cards with 3D effects */}
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12 relative">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn(index % 2 === 0 ? "left" : "right", index * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
            className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
              project.align === "left" ? "md:flex-row" : "md:flex-row-reverse"
            } justify-end sm:flex-col`}
          >
            <div className="relative group">
              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-orange-400 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative bg-gray-900 rounded-xl p-6 h-full">
                <h2 className="md:text-3xl sm:text-2xl text-orange font-bold group-hover:text-cyan-300 transition-colors">
                  {project.name}
                </h2>
                <h2 className={`text-xl font-thin text-white font-special ${
                  project.align === "left" ? "md:text-right" : "md:text-left"
                }`}>
                  {project.year}
                </h2>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-lg flex gap-2 items-center mt-2 text-cyan hover:text-orange transition-all duration-300 ${
                    project.align === "left" ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  View <BsFillArrowUpRightCircleFill className="group-hover:rotate-45 transition-transform" />
                </a>
                <p className="mt-4 text-gray-400 text-base max-w-lg group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Image with enhanced hover effect */}
            <motion.div 
              className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden relative border-2 border-transparent"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(100, 255, 218, 0.4)",
                borderColor: "rgba(100, 255, 218, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-orange-400/30 opacity-0 hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
              <img 
                src={project.image} 
                alt="website image" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-cyan-500/10 hover:bg-transparent transition-all duration-500"></div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;