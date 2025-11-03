import { motion } from "framer-motion";

const experiences = [
  {
    title: "Project Engineer(Java Full Stack Developer)",
    company: "Inventzo System",
    period: "Aug 2023 – Present",
    location: "Chennai, India",
    description:
      "Designed and deployed REST APIs for credit card application and customer profile modules. Built scalable microservices using Spring Boot, JPA, and MySQL. Integrated backend services with ReactJS frontend via Axios for real-time data interaction.",
  },
  {
    title: "Project Engineer (Java Developer)",
    company: "Randstad → Merck",
    period: "July 2022 – July 2023",
    location: "Bangalore, India",
    description:
      "Developed and maintained Java-based web applications using Spring Boot, REST APIs, and Microservices. Enhanced API performance and optimized backend services with MySQL and Hibernate. Collaborated with frontend teams using ReactJS for seamless API integration.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col items-center justify-center py-24 overflow-hidden
                 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-200"
    >
      {/* Background */}
      <div className="absolute top-[10%] left-[15%] w-[300px] h-[300px] bg-purple-700/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-indigo-800/20 blur-[130px] rounded-full"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center z-20"
      >
        Experience
      </motion.h2>

      {/* Timeline */}
      <div className="relative w-full max-w-4xl px-6 md:px-12 z-20">
        {/* Line */}
        <div className="absolute left-6 sm:left-8 md:left-10 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/40 to-purple-800/20"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative flex items-start gap-6 mb-14"
          >
            {/* dot */}
            <div className="absolute left-[4px] sm:left-[6px] md:left-[8px] mt-2 w-4 h-4 rounded-full bg-purple-400 border-4 border-gray-950 shadow-[0_0_15px_rgba(168,85,247,0.6)]"></div>

            {/* Content */}
            <div className="ml-12 md:ml-16 p-5 bg-gradient-to-br from-[#1b1521]/80 to-[#0e0c10]/90
                            backdrop-blur-md border border-purple-900/40 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.15)]
                            hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-500 w-full">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-100">
                {exp.title}{" "}
                <span className="text-purple-400 font-semibold"><br />@{exp.company}</span>
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                {exp.period} &nbsp; | &nbsp; {exp.location}
              </p>
              <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
