import { useState } from "react";
import { motion } from "framer-motion";
import mkhs from "../assets/mkha.jpg"; // same image from Hero

const About = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:px-24 px-10 py-16
      bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-purple-800/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-indigo-800/20 blur-[160px] rounded-full" />

      {/* Left side - profile image */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative flex justify-center items-center lg:w-1/2 mb-12 lg:mb-0"
      >
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-1 rounded-full shadow-[0_0_30px_rgba(147,51,234,0.3)]">
          <img
            src={mkhs}
            alt="Profile"
            className="rounded-full object-cover w-[320px] h-[320px] md:w-[400px] md:h-[400px]"
          />
        </div>
      </motion.div>

      {/* Right side - About content */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="z-40 lg:w-1/2 text-gray-300"
      >
        <h2 className="text-4xl md:text-7xl font-bold text-gray-100 mb-10">
           About Me
        </h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          {[
            { id: "personal", label: "Personal Info" },
            { id: "experience", label: "Experience Summary" },
            { id: "skills", label: "Technical Skills" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-purple-600 border-purple-600 text-white shadow-lg"
                  : "border-gray-700 hover:border-purple-400 hover:text-purple-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* --- Tab 1: Personal Info --- */}
        {activeTab === "personal" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-gray-100">
              Java Full Stack Developer | 3+ Years Experience
            </h3>
            <p className="text-gray-400 max-w-xl">
              I’m <span className="text-purple-400 font-semibold">Mithun Kumar H S</span>, a results-driven Java Full Stack Developer 
              with over 3 years of hands-on experience in building, designing, and deploying scalable web applications using 
              <span className="text-purple-400"> Java 8, Spring Boot, Microservices, Hibernate, REST APIs,</span> 
              and <span className="text-purple-400">MySQL</span>. 
              Skilled in Agile development, CI/CD, and AWS integrations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-gray-300">
              <div>
                <p className="font-medium">👤 Mithun Kumar H S</p>
                <p className="font-medium">📧 mithunkumar20201@gmail.com</p>
                <p className="font-medium">🎓 Bachelor of Engineering</p>
              </div>
              <div>
                <p className="font-medium">📞 +91 78924 75785</p>
                <p className="font-medium">📍 Bengaluru, India</p>
              </div>
            </div>

            <p className="mt-6 text-purple-400 font-medium">
              Languages: English, Kannada, Hindi, Telugu, Tamil
            </p>
          </motion.div>
        )}

        {/* --- Tab 2: Experience Summary --- */}
        {activeTab === "experience" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">
              Professional Experience
            </h3>

            <div>
              <h4 className="text-lg font-semibold text-purple-400">
                Inventzo System | Project Engineer (Java Full Stack Developer)
              </h4>
              <p className="text-sm text-gray-400 italic">Aug 2023 – Present</p>
              <ul className="list-disc list-inside text-gray-400 mt-2 space-y-2">
                <li>Developed RESTful APIs using Java 8, Spring Boot, Hibernate, and Microservices architecture.</li>
                <li>Optimized MySQL queries and schema design improving performance by ~30%.</li>
                <li>Led backend modules for customer profile, credit card, and loan workflows.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-purple-400">
                Randstad → Merck | Project Engineer (Java Full Stack Developer)
              </h4>
              <p className="text-sm text-gray-400 italic">Jul 2022 – Jul 2023</p>
              <ul className="list-disc list-inside text-gray-400 mt-2 space-y-2">
                <li>Developed and maintained Java-based microservices using Spring Boot & REST APIs.</li>
                <li>Implemented JWT authentication and optimized database queries reducing latency by 40%.</li>
                <li>Actively participated in Agile sprints and CI/CD deployments.</li>
              </ul>
            </div>
          </motion.div>
        )}

        {/* --- Tab 3: Technical Skills --- */}
        {activeTab === "skills" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-gray-100">Technical Skills</h3>

            <div className="flex flex-wrap gap-3 mt-4">
              {[
                "Java 8+",
                "Spring Boot",
                "Spring MVC",
                "Microservices",
                "Hibernate / JPA",
                "REST APIs",
                "ReactJS",
                "MySQL",
                "AWS (S3)",
                "Docker",
                "GitHub / Bitbucket",
                "CI/CD",
                "Mockito",
                "Postman",
                "Jira / Confluence",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#1b1b22]/80 border border-gray-700/50 rounded-full text-sm 
                             hover:border-purple-500 hover:text-purple-400 transition"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 text-gray-400">
              <p>
                <span className="text-purple-400 font-semibold">Certifications:</span> 
                Full Stack Java Developer – ABC Upskill | 
                SOLID Principles & Design Patterns – Scaler | 
                Basic React Development – Udemy
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default About;
