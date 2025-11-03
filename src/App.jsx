import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skill";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./utils/ScrollToTop";
import Footer from "./components/Footer";
import TransitionEffect from "./components/TransctionEffect";

const pageTransition = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const App = () => {
  const location = useLocation();

  return (
    <div className="bg-[#0a0a0d] text-gray-100 min-h-screen overflow-x-hidden">
      <Header />
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <>
                <TransitionEffect /> 
                <motion.div
                  {...pageTransition}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Hero />
                </motion.div>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <TransitionEffect />
                <motion.div
                  {...pageTransition}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <About />
                </motion.div>
              </>
            }
          />
          <Route
            path="/skills"
            element={
              <>
                <TransitionEffect />
                <motion.div
                  {...pageTransition}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Skills />
                </motion.div>
              </>
            }
          />
          <Route
            path="/experience"
            element={
              <>
                <TransitionEffect />
                <motion.div
                  {...pageTransition}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Experience />
                </motion.div>
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <TransitionEffect />
                <motion.div
                  {...pageTransition}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Projects />
                </motion.div>
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <TransitionEffect />
                <motion.div
                  {...pageTransition}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Contact />
                </motion.div>
              </>
            }
          />

          <Route
            path="*"
            element={
              <>
                <TransitionEffect />
                <motion.div
                  {...pageTransition}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Hero />
                </motion.div>
              </>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
