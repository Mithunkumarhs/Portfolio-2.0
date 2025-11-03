import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import fit from "../assets/images/gym.jpg"
import resort from "../assets/images/resort.jpg"
import air from "../assets/images/airline.jpg"
import food from "../assets/images/food.jpg"
import hotel from "../assets/images/hotel.jpg"
import lib from "../assets/images/library.jpg"
import port from "../assets/images/portfolio.jpg"
import logo from "../assets/images/GoldenTemple.jpg"


// Replace with your real projects later
const projects = [
  {
    title: "Fit-Track Pro",
    description:
      "A upcoming Project of my own to track the health and Fitness of a person can be used in platform like Gym, Personal Traning and personal treacker.",
    image: fit,
    tech: "Java + SpringBoot + Microservice + React + Tailwind CSS + MySQL",
    github: "https://github.com/",
    live: "https://github.com/Mithunkumarhs",
    featured: true,
  },
  {
    title: "Resort_Application",
    description:
      "Full-stack Resort Application platform using Spring Boot, React, and MySQL.",
    image: resort,
    tech: "Spring Boot + React + MySQL",
    github: "https://github.com/",
    live: "https://github.com/Mithunkumarhs/Resort-Application.git",
  },
  {
    title: "Airline_Management_System",
    description:
      "Monolatic Based web application Project",
    image: air,
    tech: "Java + Spring Boot + Monolatic",
    github: "https://github.com/",
    live: "https://github.com/Mithunkumarhs/Airline-Management-System.git",
  },
  {
    title: "Hotel Management Application",
    description:
      "Developed REST APIs using Spring Boot for room booking and user authentication.",
    image: hotel,
    tech: "Spring Boot + JDBC/Hibernate + Monolatic + MySQL ",
    github: "https://github.com/",
    live: "https://github.com/Mithunkumarhs/Hotel-Application.git",
  },
  {
    title: "Food Delivery App",
    description:
      "Full Stack Microservice based application using Java, SpringBoot, MySQL, React",
    image: food,
    tech: "React + Java + SpringBoot + MySQL + Microservice + Tailwind CSS",
    github: "https://github.com/",
    live: "https://github.com/Mithunkumarhs/Food-Delivery-App.git",
  },
   {
    title: "Sree Comforts",
    description:
      "website of Hotel thats in Kushalnagar, just advance through restriction to see the beauty of website.",
    image: logo,
    tech: "React + Tailwind CSS",
    github: "https://github.com/",
    live: "https://www.sreecomforts.com/",
  },
  {
    title: "Library",
    description:
      "Library Management Application",
    image: lib,
    tech: "Java + SpringBoot + MySQL + Monolatic",
    github: "https://github.com/",
    live: "https://github.com/Mithunkumarhs/Library.git",
  },
  {
    title: "My First Portfolio",
    description:
      "My First Portfolio I created.",
    image: port,
    tech: "HTML + CSS + JS",
    github: "https://github.com/",
    live: "https://github.com/Mithunkumarhs/portfolio.git",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-20 px-8 md:px-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl md:text-6xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-100 to-violet-300"
      >
        Projects
      </motion.h2>

      <div className="flex flex-col space-y-14">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col lg:flex-row items-center justify-between gap-8 p-6 
              rounded-2xl border border-gray-800 bg-gray-900/40 
              shadow-[0_8px_30px_rgba(80,0,150,0.2)] hover:shadow-[0_8px_30px_rgba(160,90,255,0.3)] 
              transition-all duration-500 hover:scale-[1.02]`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-xl border border-gray-700"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 space-y-3 text-left">
              {project.featured && (
                <p className="text-sm text-purple-400 font-semibold">
                  Featured Project
                </p>
              )}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-100">
                {project.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>
              <p className="text-sm text-violet-300 font-medium">
                {project.tech}
              </p>

              <div className="flex items-center gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-violet-400 transition-colors text-lg"
                >
                  <FiGithub />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-violet-700/70 hover:bg-violet-600/80 rounded-lg text-gray-100 font-semibold transition-all"
                >
                  <FiExternalLink className="mr-2" /> Visit Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
