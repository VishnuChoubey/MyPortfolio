import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaPython, FaGitAlt, FaDatabase, FaRoute } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,

  SiTailwindcss,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiLeetcode,

} from "react-icons/si";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "React.js", icon: FaReact },

  { skill: "Tailwind CSS", icon: SiTailwindcss },
  { skill: "Java", icon: FaJava },
  { skill: "Spring Boot", icon: SiSpringboot },
  { skill: "Redis", icon: SiRedis },
  { skill: "PostgreSQL", icon: SiPostgresql },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "OSRM", icon: FaRoute }, // substitute icon
  { skill: "Python", icon: FaPython },

  { skill: "LeetCode", icon: SiLeetcode },
  { skill: "Git", icon: FaGitAlt },
  { skill: "Database", icon: FaDatabase },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col items-center"
        >
          <item.icon className="text-6xl text-orange" />
          <p className="text-center mt-4 text-sm">{item.skill}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSM;
