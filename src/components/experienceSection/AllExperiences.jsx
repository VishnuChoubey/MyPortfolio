import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { delay, duration: 0.7, type: "spring" },
  },
});

const experiences = [
  {
    job: "Full Stack Developer (Independent)",
    company: "CheckIt – Real-Time Delhi Bus Tracker",
    date: "Feb 2024 – Present",
    responsibilities: [
      "Built a real-time bus tracking system using Spring Boot, WebSocket, and Redis Pub/Sub.",
      "Integrated Delhi OTD GTFS-RT API and OSRM for live route snapping and ETA prediction.",
      "Used Leaflet.js on frontend for real-time map display with React.",
      "Deployed using Docker and handled 15K+ reqs/hour using Resilience4j.",
    ],
  },
  {
    job: "Full Stack Developer",
    company: "KabadiHunt – Scrap Collection Platform",
    date: "Nov 2023 – Jan 2024",
    responsibilities: [
      "Developed location-based scrap booking & pickup system with secure login and role-based dashboards.",
      "Integrated Google Maps, reverse geocoding, and order management using Spring Boot & PostgreSQL.",
      "Built React frontend with protected routes, form validation, and responsive design.",
    ],
  },
  {
    job: "Developer | Open Source Contributor",
    company: "Self-Initiated Projects",
    date: "2023 – Present",
    responsibilities: [
      "Built scalable apps using React, Java, Spring Boot, and REST APIs.",
      "Practiced real-time data handling, containerization (Docker), and circuit breakers (Resilience4j).",
      "Solved 450+ DSA problems on LeetCode and contributed to backend systems for personal projects.",
    ],
  },
];

const AllExperience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-[100vh] w-full bg-gradient-to-br from-[#0a0c10] via-[#181c24] to-[#101217] py-20 px-2 font-mono overflow-hidden"
    >
      {/* Neon code lines background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-0 top-1/4 w-1 h-2/3 bg-gradient-to-b from-cyan-400/30 via-orange-400/20 to-transparent blur-lg rounded-full" />
        <div className="absolute right-0 bottom-1/4 w-1 h-2/3 bg-gradient-to-t from-orange-400/30 via-cyan-400/20 to-transparent blur-lg rounded-full" />
      </div>

      {/* Section Title */}
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col items-center mt-8 mb-8 relative z-10"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent tracking-widest drop-shadow-glow uppercase font-mono">
          {"<Experience />"}
        </h2>
        <p className="text-gray-400 text-lg mt-4 text-center max-w-2xl font-mono">
          My journey as a developer, building robust, real-time systems and scalable products using modern technologies.
        </p>
      </motion.div>

      {/* Top Info Cards */}
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex lg:flex-row flex-col gap-8 items-center justify-center w-full relative z-10"
      >
        {/* Left Card */}
        <div className="flex flex-col gap-6 w-[300px] bg-[#181c24]/80 rounded-2xl p-6 shadow-lg border border-cyan-400/30">
          <p className="text-orange-400 font-bold uppercase text-3xl font-mono text-center tracking-widest">
            Since 2022
          </p>
          <div className="flex justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-center">
              <p className="font-extrabold text-4xl md:text-5xl text-cyan-400 drop-shadow-glow">2+</p>
              <p className="font-bold text-base md:text-lg text-gray-300 uppercase -mt-2">Years</p>
            </div>
            <span className="font-bold text-5xl text-cyan-400">/</span>
            <div className="flex flex-col justify-center items-center">
              <p className="font-extrabold text-4xl md:text-5xl text-cyan-400 drop-shadow-glow">10+</p>
              <p className="font-bold text-base md:text-lg text-gray-300 uppercase -mt-2">Projects</p>
            </div>
          </div>
          <p className="text-center text-gray-300 text-base">
            Built scalable real-time applications using <span className="text-cyan-400">Spring Boot</span>, <span className="text-cyan-400">WebSocket</span>, <span className="text-cyan-400">Redis</span>, <span className="text-cyan-400">React</span>, and <span className="text-cyan-400">PostgreSQL</span>. <br />
            Deployed projects handling up to <span className="text-orange-400">15K+ requests/hour</span>.
          </p>
          <div className="flex flex-col justify-center items-center">
            <p className="font-extrabold text-4xl md:text-5xl text-cyan-400 drop-shadow-glow">15K+</p>
            <p className="font-bold text-base md:text-lg text-gray-300 uppercase -mt-2">Reqs/Hour (Peak)</p>
          </div>
        </div>
        {/* Middle Image */}
        <div className="lg:w-[35%] md:w-[50%] sm:w-[80%] flex justify-center items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-orange-400/30 bg-[#101217]/70">
            <img
              src="/images/experience-image.png"
              alt="my experience"
              className="w-full h-auto object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101217] via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
        </div>
        {/* Right Card */}
        <div className="xl:w-[25%] lg:w-[30%] bg-[#181c24]/80 border border-orange-400/30 p-6 rounded-2xl shadow-lg">
          <p className="text-base text-center text-gray-300 font-mono">
            <span className="text-cyan-400 font-bold">Specialized in:</span> <br />
            <span className="font-bold text-white">Spring Boot, React, and real-time systems</span>, leveraging <span className="text-cyan-400">WebSocket</span>, <span className="text-cyan-400">Redis</span>, and <span className="text-cyan-400">PostgreSQL</span> to build scalable backend architectures.<br />
            <span className="text-orange-400 font-bold">CheckIt</span> – a real-time Delhi bus tracker, with production-level performance (<span className="text-orange-400">15K+ reqs/hour</span>), ensuring robust data flow and live updates.
          </p>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="w-full h-1 mt-8 mb-8 bg-gradient-to-r from-cyan-400/30 via-orange-400/20 to-transparent rounded-full" />

      {/* Timeline/Stepper */}
      {/* <div className="flex flex-col lg:flex-row items-center justify-between flex-wrap gap-12 relative z-10">
        {experiences.map((experience, index) => (
          <div key={index} className="flex flex-col items-center">
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="md:h-[350px] md:w-[320px] sm:w-full border-2 border-cyan-400/40 bg-[#181c24]/80 rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <p className="font-bold text-cyan-400 text-lg">{experience.job}</p>
              <p className="text-orange-400 text-base">{experience.company}</p>
              <p className="text-gray-400 text-sm mb-2">{experience.date}</p>
              <ul className="list-disc mt-4 pl-4 text-gray-300 text-sm space-y-2">
                {experience.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </motion.div>
            {index < experiences.length - 1 && (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="my-8"
              >
                <FaArrowRightLong className="text-5xl text-orange-400 lg:block sm:hidden" />
              </motion.div>
            )}
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default AllExperience;