import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaCopyright } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Animated copyright */}
        <motion.div
          className="footer-left"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, type: "spring" }}
        >
          <p className="copyright">
            <FaCopyright/> <span className="name-gradient">NANDINI CHATURVEDI</span>
          </p>
        </motion.div>

        {/* Animated social section */}
        <motion.div
          className="footer-right"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <motion.div
            className="contact"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h4>CONTACT ME</h4>
            <FaArrowRight />
          </motion.div>

          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:you@example.com">
            <FaEnvelope />
          </a>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
