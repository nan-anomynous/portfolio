import React from "react";
import { motion } from "framer-motion";
import "./Homepage.css";
import portImage from "../../assests/port.jpg";
import Resume from "../../assests/Nandini_Chaturvedi_Updated_Resume.pdf";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 60,
    },
  }),
};

const Homepage = () => {
  const skills = [
    "React.js",
    "EJS",
    "JavaSript",
    "node.js",
    "DJANGO",
    "Python",
    "SQL",
    "HTML",
    "CSS",
    "MongoDB",
    "Java",
    "c#",
  ];

  return (
    <div className="home-container">
      <motion.section
        className="about-section"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <motion.img
          src={portImage}
          alt="Portfolio"
          className="profile-img"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
        />

        <motion.div className="about-text">
          <h2>About Me</h2>
          <p>
            I am Nandini Chaturvedi, currently pursuing my studies with a focus
            on web development and programming. I have a growing knowledge of
            building dynamic and responsive web applications using HTML, CSS,
            and Django, along with back-end development skills in Python and
            Java. I am passionate about learning new technologies and enhancing
            my coding skills.
          </p>
        </motion.div>
      </motion.section>

      <motion.div
        className="lower-card"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        <div className="lower-card-left">
          <h3>My Projects</h3>
          <motion.div
            className="home-project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Link to="/projects" style={{textDecoration:'none',color:'white'}}>
              <div style={{ display: "flex", gap: "1rem" }}>
                <span className="tag">Node JS </span>
                <span className="tag">React JS </span>
                <span className="tag">Express JS </span>
                <span className="tag">MongoDB </span>
              </div>
              <h4>✨ Projects I've Made</h4>
              <p>
                This is a Node.js application that provides travel information
                and tourist guidance.
              </p>
            </Link>
          </motion.div>
          <motion.div
            className="home-project-card2"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 100 }}
          ></motion.div>

          <motion.div
            className="home-project-card3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100 }}
          ></motion.div>
        </div>

        <motion.div
          className="lower-card-right"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <div className="skills">
            <h3>Skills</h3>
            <div className="skill-grid">
              {skills.map((skill, i) => (
                <motion.span
                  className="skill-tag"
                  key={skill}
                  whileHover={{ scale: 1.1, backgroundColor: "#ddd" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.section
            className="resume-section"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          >
            <h3>Resume</h3>
            <motion.button
              className="resume-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <a
                href={Resume}
                style={{ textDecoration: "none", color: "white" }}
              >
                More details about my career
              </a>
            </motion.button>
          </motion.section>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Homepage;
