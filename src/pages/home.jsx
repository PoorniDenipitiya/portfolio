import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import "./home.css"; // Importing Home-specific CSS
import CustomHeader from "../components/header"; // Importing Header component
import CustomFooter from "../components/footer"; // Importing Footer component
import {
  FaMailBulk,
  FaLinkedin,
  FaFacebook,
  FaMedium,
  FaGithub,
  FaYoutube,
  FaHackerrank,
} from "react-icons/fa";
import Education from "./education.jsx";
import TechnicalSkills from "./technicalSkills.jsx";
import Projects from "./projects.jsx";
import Highlight from "./highlights.jsx";
import Contact from "./contact.jsx";
import poo from "../images/poo.jpg";
//import poo from "../images/home_face.jpg"
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import uparrow from "../images/up-arrow.png";
import Loader from "../components/loader";

const { Content } = Layout;

const words = [ "Designer", "Developer", "Organizer", "Explorer", "Violinist"];

const Home = () => {
  const [loading, setLoading] = useState(true);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showScroll, setShowScroll] = useState(false); // State for scroll icon visibility

  useEffect(() => {
    // Simulate loading (e.g., fetching data, loading assets, etc.)
    setTimeout(() => {
      setLoading(false); // After loading is complete
    }, 3000); // Adjust the duration as needed
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000); // Change word every 3 seconds

    const handleScroll = () => {
      if (window.scrollY > 300) { // Show icon after scrolling down 300px
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    
    window.scrollTo(0, 0); // Scroll to the top
    // Initialize AOS
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
    });

     // Refresh AOS
     AOS.refresh();

   /* return () => {
      clearInterval(interval);
      // Cleanup AOS instance
      AOS.refresh();
    };
  }, []);*/

  window.addEventListener('scroll', handleScroll); // Listen for scroll events
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll); // Cleanup listener
      AOS.refresh();
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  };

   // Conditionally render the loader or the main content
   if (loading) {
    return <Loader />; // Show the loader while loading is true
  }


  return (
    <Layout className="layout" id="logo">
      <CustomHeader />
      <Content className="content-layout">
        <div className="box content-left" data-aos="fade-up">
        <div className="photo-frame">
            <img src={poo} alt="Poorni Denipitiya" className="photo" />
          </div>
          <div className="scrolling-text">
            <h1 className="para">I'm a </h1>
            <h1 className="word" key={currentWordIndex}>
              {words[currentWordIndex].split("").map((val, index) => (
                <span
                  key={index}
                  className={`char char-${index % 2 === 0 ? "top" : "bottom"}`}
                >
                  {val}
                </span>
              ))}
            </h1>
          </div>
        </div>
        <div className="box content-middle" data-aos="fade-up">
          {/* Optional middle content can be placed here */}
          <p className="aboutPara">
            Hello! I’m Poorni Denipitiya, a passionate tech enthusiast with a
            zest for creativity and a love for technology. With a background in
            full-stack development, I thrive on building innovative solutions
            that enhance user experiences and drive results.
            <br></br>
            <br></br>My journey in the tech world is fueled by curiosity and a
            commitment to continuous learning. I embrace challenges as
            opportunities for growth and enjoy collaborating with diverse teams
            to bring ideas to life. Beyond coding, I’m also a violinist,
            blending artistry with technology, a unique perspective that enriches
            my approach to problem-solving.
            <br></br>
            <br></br>I believe in the power of positivity and teamwork, and I’m
            excited about technology’s potential to make a difference. Whether
            I’m crafting a user-friendly interface or exploring emerging trends,
            I strive to create meaningful connections through my work.
            <br></br>
            <br></br>Let’s connect and explore how we can create something
            amazing together!
          </p>
        </div>
        <div className="box content-right" data-aos="fade-left">
          <div className="social-icons">
            <a
              href="mailto:uthpala9931@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMailBulk />
            </a>
            <a
              href="https://www.linkedin.com/in/poorni-denipitiya-4688b2286"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100085017612092&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://medium.com/%40uthpala9931"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMedium />
            </a>
            <a
              href="https://www.hackerrank.com/profile/dputhpala21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaHackerrank />
            </a>
            <a
              href="https://github.com/PoorniDenipitiya/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />{" "}
              {/* Replace with an appropriate HackerRank icon if available */}
            </a>
            <a
              href="https://www.youtube.com/@poorniuthpala"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        {/* Scroll to Top Icon */}
        {showScroll && (
          <div className="scroll-to-top" onClick={scrollToTop}>
            <img src={uparrow} alt="Scroll to Top" />
          </div>
        )}
      </Content>

      <hr></hr>
      <section id="education" data-aos="fade-up">
        <Education />
      </section>

      <hr></hr>
      <section id="skills" data-aos="fade-up">
        <TechnicalSkills />
      </section>

      <hr></hr>
      <section id="projects" data-aos="fade-up">
        <Projects />
      </section>

      <hr></hr>
      <section id="highlights" data-aos="fade-up">
        <Highlight />
      </section>

      <hr></hr>
      <section id="contact" data-aos="fade-up">
        <Contact />
      </section>

      <CustomFooter />
    </Layout>
  );
};

export default Home;
