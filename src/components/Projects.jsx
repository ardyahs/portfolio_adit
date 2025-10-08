import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          A showcase of my recent work and creative solutions
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-24"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-12 lg:gap-16 items-center`}
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/2">
              <motion.div
                className="group relative overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-xl border border-gray-700/50 group-hover:shadow-2xl transition-all duration-300"
                />

                {/* Overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <motion.a
                    href={project.demo}
                    className="p-3 bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-200 border border-gray-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="w-5 h-5 text-gray-200" />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    className="p-3 bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-200 border border-gray-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-5 h-5 text-gray-200" />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Project Details */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div>
                <motion.h3
                  className="text-3xl lg:text-4xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {project.description}
                </motion.p>
              </div>

              {/* Technologies */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200 rounded-full text-sm font-medium border border-gray-600 hover:border-gray-500 hover:shadow-md transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + techIndex * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.a
                  href={project.demo}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-full font-medium hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-600"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  Live Demo
                </motion.a>

              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View More Section */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.a
          href="https://github.com/syaafiudinm?tab=repositories"
          className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-full font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-600"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Projects
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Projects;
