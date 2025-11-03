import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import mkhs from "../assets/mkha.jpg";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex xl:flex-row flex-col-reverse items-center justify-between
      lg:px-24 md:px-16 sm:px-10 px-6 relative overflow-hidden 
      bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
    >
      <div className="absolute top-[-10%] left-[-10%] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-[#5b3e77]/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] md:w-[600px] h-[500px] md:h-[600px] bg-[#2a1f33]/40 rounded-full blur-[140px]" />

      {/* Left */}
      <div className="z-40 flex flex-col items-start xl:items-start text-left mt-10 xl:mt-0 mb-[10%] xl:mb-0">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-8xl 
                     text-transparent bg-clip-text bg-gradient-to-r 
                     from-gray-200 via-gray-100 to-purple-200 mb-4 sm:mb-6 leading-tight"
        >
          Java <br className="hidden sm:block" /> Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-lg sm:max-w-2xl leading-relaxed"
        >
          A results-driven <span className="text-purple-300 font-semibold">Java Full Stack Developer</span> 
          with hands-on experience in <span className="text-purple-200">Spring Boot, Microservices, REST APIs, and ReactJS</span>. 
          Proven ability to build, test, and deploy scalable applications using 
          <span className="text-purple-200"> MySQL, Hibernate, and Docker</span>. 
          Passionate about crafting clean, efficient code and delivering robust software solutions.
        </motion.p>

        {/* Resume*/}
        <motion.a
        href="/Portfolio-2.0/Mithun_Kumar_HS_Java_FullStack_Developer_SpringBoot_React_AWS.docx"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
        type: "spring",
        stiffness: 40,
        damping: 25,
        delay: 1.2,
        duration: 1.5,
      }}
      className="inline-flex items-center gap-2 px-8 py-2 mt-6 rounded-xl 
             bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold
             hover:from-violet-700 hover:to-purple-200 hover:text-white
             transition-all duration-500 text-sm sm:text-base"
      >
        Resume
       <FiExternalLink className="text-lg" />  
      </motion.a>
      </div>

      {/* Right*/}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 25,
          delay: 0.5,
        }}
        className="flex justify-center items-center mt-8 lg:mt-0 w-full xl:w-1/2 relative"
      >
        <div className="absolute justify-center w-auto h-auto blur-[150px]" />

        <img
          src={mkhs}
          alt="Profile"
          className="relative justify-center mt-8 sm:mt-12 xl:mt-0 h-[60vh] sm:h-[70vh] lg:h-[80vh] 
                     w-auto max-w-full object-cover rounded-2xl
                     shadow-[0_0_80px_rgba(147,51,234,0.15)] border border-gray-700/40"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
