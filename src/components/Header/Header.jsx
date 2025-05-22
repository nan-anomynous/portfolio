import React from 'react';
import './Header.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Resume from '../../assests/Nandini_Chaturvedi_Updated_Resume.pdf';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 10 }}
    >
      <div className="header-container">
        <motion.h1
          className="logo animated-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          NANDINI
        </motion.h1>

        <motion.nav
          className="nav-menu"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.7,
                duration: 0.7,
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div whileHover={{ scale: 1.1 }}><Link to="/">Home</Link></motion.div>
          <motion.div whileHover={{ scale: 1.1 }}><Link to="/projects">Projects</Link></motion.div>
          <motion.div whileHover={{ scale: 1.1 }}><a href={Resume} download="Nandini_Chaturvedi_Resume">Resume</a></motion.div>
        </motion.nav>

        <motion.div
          className="social-icons"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.a whileHover={{ scale: 1.3 }} href="https://github.com/nan-anomynous" target="_blank" rel="noopener noreferrer"><FaGithub /></motion.a>
          <motion.a whileHover={{ scale: 1.3 }} href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></motion.a>
          <motion.a whileHover={{ scale: 1.3 }} href="#" target="_blank" rel="noopener noreferrer"><FaEnvelope /></motion.a>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
