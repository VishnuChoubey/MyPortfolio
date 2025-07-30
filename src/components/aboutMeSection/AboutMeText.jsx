import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Vishnu Choubey, a full-stack developer and B.Tech Computer Science student (2026) with a focus on building scalable, real-time web applications. I specialize in Spring Boot, React.js, Redis, WebSocket, and PostgreSQL. 
        My key projects include <strong>CheckIt</strong>, a live Delhi bus tracking system, and <strong>KabadiHunt</strong>, a location-based scrap collection platform.
        I’ve also solved over 600+ problems on LeetCode and maintain a strong interest in backend architecture, APIs, and performance optimization.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
