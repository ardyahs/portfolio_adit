import { FaLaravel, FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiFirebase,
  SiGit,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: 0, scale: 1 },
  animate: {
    y: [-8, 8, -8],
    scale: [1, 1.05, 1],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const technologies = [
  { Icon: SiNextdotjs, color: "text-black", duration: 2.5, name: "Next.js" },
  { Icon: FaReact, color: "text-cyan-400", duration: 3.0, name: "React" },
  { Icon: FaLaravel, color: "text-red-500", duration: 2.8, name: "Laravel" },
  { Icon: SiMysql, color: "text-orange-500", duration: 3.2, name: "MySQL" },
  {
    Icon: SiTailwindcss,
    color: "text-cyan-400",
    duration: 2.7,
    name: "Tailwind",
  },
  {
    Icon: SiBootstrap,
    color: "text-purple-500",
    duration: 3.1,
    name: "Bootstrap",
  },
  { Icon: SiGit, color: "text-orange-600", duration: 2.9, name: "Git" },
  {
    Icon: SiFirebase,
    color: "text-amber-400",
    duration: 3.3,
    name: "Firebase",
  },
  {
    Icon: SiSupabase,
    color: "text-green-400",
    duration: 2.6,
    name: "Supabase",
  },
  {
    Icon: SiPostgresql,
    color: "text-blue-600",
    duration: 3.4,
    name: "PostgreSQL",
  },
];

const TechnologyIcon = ({ Icon, color, duration, name, index }) => (
  <motion.div
    variants={itemVariants}
    className="group relative flex flex-col items-center"
  >
    <motion.div
      initial="initial"
      animate="animate"
      variants={iconVariants(duration)}
      className="relative p-6 bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700/50 hover:shadow-xl transition-all duration-300 group-hover:bg-gray-800/80 hover:border-gray-600"
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className={`text-6xl ${color} transition-all duration-300`} />

      {/* Glow effect on hover */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${color.replace(
          "text-",
          "bg-"
        )} blur-xl`}
      ></div>
    </motion.div>

    {/* Technology name tooltip */}
    <motion.span
      className="mt-3 text-sm font-medium text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 0, y: 10 }}
      whileHover={{ opacity: 1, y: 0 }}
    >
      {name}
    </motion.span>
  </motion.div>
);

const Technologies = () => {
  return (
    <section id="technologies" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent mb-4">
          Technologies
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          The tools and technologies I use to bring ideas to life
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto"
      >
        {technologies.map((tech, index) => (
          <TechnologyIcon
            key={index}
            Icon={tech.Icon}
            color={tech.color}
            duration={tech.duration}
            name={tech.name}
            index={index}
          />
        ))}
      </motion.div>

      {/* Decorative elements */}
      <div className="relative mt-16">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-gray-600 to-transparent"></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 w-2 h-2 bg-gradient-to-r from-gray-400 to-white rounded-full"></div>
      </div>
    </section>
  );
};

export default Technologies;
