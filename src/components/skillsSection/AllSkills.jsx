
import { 
  FaJava, FaReact, FaPython, FaGitAlt, FaDatabase, FaNodeJs, FaGithub, FaCss3Alt, FaHtml5 
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { 
  SiSpringboot, SiRedis, SiMongodb, SiPostgresql, SiLeetcode, SiHtml5, SiCss3, SiJavascript, SiExpress, SiTypescript, SiTailwindcss 
} from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "Java", icon: FaJava },
  { skill: "Spring Boot", icon: SiSpringboot },
  { skill: "React.js", icon: FaReact },
  { skill: "Node.js", icon: FaNodeJs },
  { skill: "Express.js", icon: SiExpress },
  { skill: "Redis", icon: SiRedis },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "PostgreSQL", icon: SiPostgresql },
  { skill: "Python", icon: FaPython },
  { skill: "REST API", icon: FaDatabase },
  { skill: "Git", icon: FaGitAlt },
  { skill: "GitHub", icon: FaGithub },
  { skill: "LeetCode", icon: SiLeetcode },
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "Tailwind CSS", icon: SiTailwindcss },
];

const codeBg =
  "bg-gradient-to-br from-[#181c24] via-[#23272f] to-[#101217] border border-[#23272f] shadow-lg shadow-black/40";

const AllSkills = () => {
  return (
    <div className="py-16 px-2 min-h-[70vh] flex flex-col items-center justify-center bg-[#101217]">
      <div className="w-full max-w-[1200px] mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-orange text-center mb-2 tracking-wider">
          <span className="text-cyan">{"<"}</span>
          Developer Skills
          <span className="text-cyan">{"/>"}</span>
        </h2>
        <p className="text-center text-gray-400 text-lg">
          Technologies I use to build robust, scalable, and modern web applications.
        </p>
      </div>
      <div
        className={`flex flex-wrap justify-center gap-8 p-8 rounded-2xl ${codeBg}`}
        style={{
          backgroundImage:
            "linear-gradient(135deg, #181c24 60%, #23272f 100%)",
        }}
      >
        {skills.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col items-center m-2"
          >
            <div className="bg-[#181c24] p-4 rounded-xl shadow-md shadow-black/60 hover:scale-110 transition-transform duration-200 border border-[#23272f]">
              <item.icon className="text-5xl md:text-6xl text-orange drop-shadow-glow" />
            </div>
            <span className="mt-3 text-gray-200 text-base font-mono tracking-wide">
              {item.skill}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 w-full max-w-[700px] mx-auto text-center text-gray-500 text-sm font-mono opacity-80">
        <span className="text-cyan">{"//"}</span> <span>Like a developer in the dark, I code with these tools.</span>
      </div>
    </div>
  );
};

export default AllSkills;