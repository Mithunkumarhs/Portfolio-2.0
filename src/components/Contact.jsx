import { motion } from "framer-motion";
import { Mail, Phone, User, MessageSquare } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_xkwuf5j",     
        "template_531f2od",   
        form.current,
        "nVeP1h3nWyIhM-wsu"             
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          setLoading(false);
          form.current.reset();
          setTimeout(() => setStatus(""), 4000);
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message ❌");
          setLoading(false);
          setTimeout(() => setStatus(""), 4000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center py-24 overflow-hidden
                 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-200"
    >
      <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-purple-700/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-indigo-800/20 blur-[130px] rounded-full"></div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center z-20"
      >
        Contact Me
      </motion.h2>

      <div
        className="relative flex flex-col lg:flex-row items-start justify-between gap-12
                   w-full max-w-5xl px-6 md:px-12 z-20"
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 order-1 lg:order-none"
        >
          <h3 className="text-2xl font-semibold text-gray-100 mb-4 text-center lg:text-left">
            Let's connect and build something{" "}
            <span className="text-purple-400">amazing!</span>
          </h3>

          <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto lg:mx-0 text-center lg:text-left">
            Feel free to reach out for Hiring, Java-based project opportunities, or just a tech chat.
            I'm open to discussing Spring Boot, Microservices, REST APIs, or any full stack ideas.
          </p>

          <div className="space-y-5 mt-6 flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-purple-800/30 border border-purple-700/40">
                <Mail className="text-purple-400 w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-gray-200 font-medium">mithunkumar20201@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-purple-800/30 border border-purple-700/40">
                <Phone className="text-purple-400 w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-gray-200 font-medium">+91 7892475785</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right*/}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-gradient-to-br from-[#1b1521]/80 to-[#0e0c10]/90 
                     backdrop-blur-lg border border-purple-900/40 rounded-2xl p-6 sm:p-8 
                     shadow-[0_0_30px_rgba(168,85,247,0.15)] space-y-5
                     w-full sm:w-[90%] mx-auto
                     max-h-[90vh] sm:max-h-none overflow-y-auto sm:overflow-visible order-2"
        >
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Name</label>
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-950/40 border border-gray-700/50 rounded-lg">
                <User className="text-purple-400 w-4 h-4" />
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="bg-transparent w-full text-gray-200 outline-none text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1 block">Email</label>
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-950/40 border border-gray-700/50 rounded-lg">
                <Mail className="text-purple-400 w-4 h-4" />
                <input
                  type="email"
                  name="from_email"
                  placeholder="you@example.com"
                  required
                  className="bg-transparent w-full text-gray-200 outline-none text-sm"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Phone</label>
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-950/40 border border-gray-700/50 rounded-lg">
                <Phone className="text-purple-400 w-4 h-4" />
                <input
                  type="text"
                  name="phone"
                  placeholder="+91 98765 43210"
                  className="bg-transparent w-full text-gray-200 outline-none text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1 block">Subject</label>
              <select
                name="subject"
                className="w-full px-3 py-2 bg-gray-950/40 border border-gray-700/50 rounded-lg 
                           text-gray-200 text-sm outline-none focus:border-purple-500 transition"
              >
                <option>Project Inquiry</option>
                <option>Job Opportunity</option>
                <option>Freelance Collaboration</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-400 mb-1 block">Message</label>
            <div className="flex items-start gap-2 px-3 py-2 bg-gray-950/40 border border-gray-700/50 rounded-lg">
              <MessageSquare className="text-purple-400 w-4 h-4 mt-1" />
              <textarea
                name="message"
                placeholder="Write your message..."
                rows="4"
                required
                className="bg-transparent w-full text-gray-200 outline-none text-sm resize-none"
              />
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full py-2 mt-2 rounded-xl bg-gradient-to-r
                       from-purple-600 to-indigo-700 text-white font-semibold
                       hover:from-purple-700 hover:to-indigo-800 transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {status && (
            <p className="text-center text-sm text-gray-300 mt-3">{status}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
