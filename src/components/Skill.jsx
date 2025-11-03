import { motion } from "framer-motion";

const skills = [
  "REST APIs",
  "MySQL",
  "ReactJS",
  "AWS (S3)",
  "Docker",
  "GitHub/Bitbucket",
  "Mockito/Postman",
  "Jira/Confluence",
  "CI/CD",
  "Spring Boot",
  "Hibernate",
  "Microservices",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden py-24 text-gray-100"
      style={{
        background:
          "repeating-radial-gradient(circle at center, rgba(0,0,0,0.5) 0, #141118 5px, #0a0a0d 20px)",
      }}
    >
      {/* Glowing background layers */}
      <div className="absolute top-[10%] left-[10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-800/30 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-indigo-900/30 blur-[120px] rounded-full"></div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-5xl font-bold mb-12 lg:mb-30 text-center z-20"
      >
        Skills
      </motion.h2>

      {/* Main container */}
      <div
        className="relative w-[320px] sm:w-[400px] md:w-[700px] h-[380px] sm:h-[420px] md:h-[500px] flex items-center justify-center z-20"
      >
        {/* Center Java Node */}
        <motion.div
          className="absolute flex items-center justify-center rounded-full 
          bg-gradient-to-br from-purple-600 to-indigo-700 text-white 
          shadow-[0_0_50px_rgba(168,85,247,0.4)] w-[70px] sm:w-[90px] md:w-[100px] 
          h-[70px] sm:h-[90px] md:h-[100px] text-base sm:text-lg md:text-xl font-bold"
          whileHover={{ scale: 1.1 }}
        >
          Java
        </motion.div>

        {/* Even circular skill positioning (responsive) */}
        {skills.map((skill, i) => {
          const total = skills.length;
          const angle = (360 / total) * i;
          const radius = window.innerWidth < 640 ? 130 : window.innerWidth < 1024 ? 220 : 280;
          const radians = (angle * Math.PI) / 180;
          const x = radius * Math.cos(radians);
          const y = radius * Math.sin(radians);

          return (
            <motion.div
              key={skill}
              className="skill-node absolute flex items-center justify-center rounded-full 
              bg-gradient-to-r from-purple-600 to-indigo-700 text-white 
              shadow-lg px-2 py-1 sm:px-3 sm:py-2 font-semibold 
              text-[10px] sm:text-sm md:text-base cursor-pointer
              hover:scale-110 hover:shadow-purple-500/40 transition-transform whitespace-nowrap"
              initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
              animate={{ x, y, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.08,
                type: "spring",
                stiffness: 70,
              }}
            >
              {skill}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
