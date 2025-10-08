import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_tddsue7",
        "template_yn6hme9",
        form.current,
        "MOkCEHp_mPWlEkV5z"
      )
      .then(() => {
        toast.success("Message sent!");
        form.current.reset();
      })
      .catch(() => toast.error("Failed to send. Try again."))
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Ready to start your next project? Let&apos;s discuss how we can work
          together
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I&apos;m always interested in new opportunities and exciting
              projects. Whether you have a question or just want to say hi, feel
              free to reach out!
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                icon: FaMapMarkerAlt,
                label: "Location",
                value: CONTACT.address,
                color: "from-gray-600 to-gray-700",
              },
              {
                icon: FaEnvelope,
                label: "Email",
                value: CONTACT.email,
                color: "from-gray-700 to-gray-800",
                isLink: true,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-4 p-4 bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div
                  className={`p-3 bg-gradient-to-r ${item.color} rounded-full group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                    {item.label}
                  </p>
                  {item.isLink ? (
                    <a
                      href={`mailto:${item.value}`}
                      className="text-lg font-semibold text-white hover:text-gray-300 transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-white">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-700/50"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                  placeholder="John"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                  placeholder="Doe"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                placeholder="john@example.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                placeholder="Let's work together"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                required
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 resize-none text-white placeholder-gray-400"
                placeholder="Tell me about your project..."
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl group border border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <FaPaperPlane className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              {sending ? "Sending..." : "Send Message"}
            </motion.button>
          </form>

          <Toaster position="bottom-center" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
