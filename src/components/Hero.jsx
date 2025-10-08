import profilePic from "../assets/profileadit.jpeg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaInstagram,
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const floatingVariants = {
  animate: {
    y: [-8, 8, -8],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content Section */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            <motion.div variants={childVariants} className="relative">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent leading-tight">
                Aditya Ardyansyah
              </h1>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-gray-400 to-white rounded-full"></div>
            </motion.div>

            <motion.div variants={childVariants} className="relative">
              <div className="text-2xl lg:text-3xl font-medium text-gray-300 h-12">
                <Typewriter
                  words={["Hello!", ""]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-400/20 rounded-lg blur-xl -z-10 opacity-50"></div>
            </motion.div>

            <motion.p
              variants={childVariants}
              className="text-lg lg:text-xl text-gray-400 max-w-xl leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={childVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="mailto:adityaardyansyah26@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-gray-800 to-black text-white rounded-full font-semibold overflow-hidden border border-gray-700"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center gap-2">
                  <FaEnvelope className="w-5 h-5" />
                  Let&apos;s Talk
                </span>
              </motion.a>

              <motion.button
                className="group px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-full font-semibold hover:border-gray-500 hover:bg-gray-800/50"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="/CV_Aditya.pdf"
                  download
                  className="flex items-center gap-2"
                >
                  <FaDownload className="w-4 h-4 group-hover:animate-bounce" />
                  Resume
                </a>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={childVariants} className="flex gap-6 pt-4">
              {[
                {
                  Icon: FaGithub,
                  href: "https://github.com/ardyahs",
                  color: "hover:text-white",
                },
   
                {
                  Icon: FaInstagram,
                  href: "https://www.instagram.com/adityardyansyah26_",
                  color: "hover:text-gray-400",
                },
                {
                  Icon: FaEnvelope,
                  href: "mailto:adityaardyansyah26@gmail.com",
                  color: "hover:text-gray-400",
                },
              ].map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 text-gray-500 ${color} transition-all duration-300 rounded-full hover:bg-gray-800/50 hover:shadow-lg border border-gray-700/50 hover:border-gray-600`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/30 via-gray-500/30 to-gray-400/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              {/* Main image container */}
              <motion.div
                className="relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              >
                <img
                  src={profilePic}
                  alt="syaafiudinm"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl border-4 border-gray-700/50 backdrop-blur-sm group-hover:shadow-3xl transition-all duration-500"
                />

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-gray-400 to-white rounded-full shadow-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-gray-500 to-gray-300 rounded-full shadow-lg"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Scroll down</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
