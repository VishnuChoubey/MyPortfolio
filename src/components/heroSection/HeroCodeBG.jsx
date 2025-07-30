const codeLines = [
  'const skills = ["React", "Spring Boot", "Node.js", "PostgreSQL"];',
  "function solveProblem(input) {",
  "  return input.map(x => x * 2);",
  "}",
  "// TODO: Build something awesome!",
  "const user = { name: 'Vishnu', role: 'Full Stack Dev' };",
  "console.log('Welcome to my portfolio!');",
];

const HeroCodeBG = () => (
  <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none overflow-hidden">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 text-[min(3vw,2rem)] leading-relaxed font-mono whitespace-pre text-cyan-300 animate-fadeIn">
      {codeLines.map((line, i) => (
        <div
          key={i}
          className={`animate-codeLine`}
          style={{
            animationDelay: `${i * 0.7}s`,
            color: i % 2 === 0 ? "#67e8f9" : "#fbbf24",
          }}
        >
          {line}
        </div>
      ))}
    </div>
    <style>{`
      @keyframes codeLine {
        0% { opacity: 0; transform: translateY(20px);}
        100% { opacity: 1; transform: translateY(0);}
      }
      .animate-codeLine {
        animation: codeLine 1.2s cubic-bezier(.4,0,.2,1) both;
      }
      .animate-fadeIn {
        animation: fadeIn 2s ease both;
      }
      @keyframes fadeIn {
        from { opacity: 0 }
        to { opacity: 0.1 }
      }
    `}</style>
  </div>
);

export default HeroCodeBG;