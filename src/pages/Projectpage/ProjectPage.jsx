import React from "react";
import { motion } from "framer-motion";
import "./ProjectPage.css";
import port2Image from "../../assests/port 2.jpg";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProjectPage = () => {
  const projectData = [
    {
      title: "Travel App",
      tech: ["Node", "CSS", "HTML", "API"],
      description:
        "Explore destinations with ease using our Travel App. It offers real-time data from travel APIs and acts as your personal tourist guide, suggesting attractions, local spots, and itineraries.",
      bgColor: "#e6f7ff",
    },
    {
      title: "Weather App",
      tech: ["React", "TailwindCSS", "JavaScript"],
      description:
        "An interactive weather forecasting app that provides current conditions and real-time temperature tracking with sleek UI and responsive design.",
      bgColor: "rgb(217, 146, 146)",
    },
    {
      title: "TNP Website",
      tech: ["React", "CSS", "HTML"],
      description:
        "The TNP Quiz Website is an engaging platform built to enhance learning through fun, topic-wise quizzes in technical and non-technical subjects. It helps students test their knowledge, track progress, and stay sharp with regularly updated question sets. Perfect for classroom practice, competitions, or self-assessment.",
      bgColor: "#e6f7ff",
    },
    {
      title: "Talent Hub",
      tech: ["React", "CSS", "HTML"],
      description:
        "TalentHub is a unique platform that showcases skills and projects while keeping user identities anonymous. It empowers individuals to express their talent freely without bias, focusing purely on creativity, expertise, and performance. Whether you're a developer, designer, or creator — your work speaks for you.",
      bgColor: "rgb(217, 146, 146)",
    },
  ];

  return (
    <motion.div
      className="project-page"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.div
        className="left-side"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="left-side-up">
          <img src={port2Image} alt="Project example" />
        </div>
        <h2>Projects I am working on</h2>
        <p>
          "I've completed several projects and am currently working on new ones
          to expand my skills further."
        </p>
        <motion.button
          className="contact-btn"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a
            href="mailto:nandinichaturvedi283@gmail.com"
            // className="contact-btn"
            style={{ textDecoration: "none", color: "white" }}
          >
            Get in Touch
          </a>
        </motion.button>
      </motion.div>

      <motion.div className="right-side">
        {projectData.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            style={{ backgroundColor: project.bgColor }}
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="tech-boxes">
              {project.tech.map((tech, i) => (
                <span className="tech" key={i}>
                  {tech}
                </span>
              ))}
            </div>
            <h3>{project.title}</h3>
            <p style={{ color: "black" }}>{project.description}</p>
            <motion.button
              className="view-btn"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}

            >
              <Link to="https://github.com/nan-anomynous" target="_blank" style={{textDecoration:'none',color:'white'}}>View Project</Link>
              
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectPage;
