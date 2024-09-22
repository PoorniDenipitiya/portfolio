import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import './home.css';  // Importing Home-specific CSS
import CustomHeader from '../components/header';  // Importing Header component
import CustomFooter from '../components/footer';  // Importing Footer component
import { FaMailBulk, FaLinkedin, FaFacebook, FaMedium, FaGithub, FaYoutube, FaHackerrank } from 'react-icons/fa';


const { Content } = Layout;

const words = ['Developer', 'Designer', 'Violinist', 'Organizer', 'Explorer'];

const Home = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout className="layout">
      <CustomHeader />
      <Content className="content-layout">
        <div className="box content-left">
          <div className="scrolling-text">
            <h1 className="para">I'm a </h1>
            <h1 className="word" key={currentWordIndex}>
              {words[currentWordIndex].split('').map((val, index) => (
                <span key={index} className={`char char-${index % 2 === 0 ? 'top' : 'bottom'}`}>
                  {val}
                </span>
              ))}
            </h1>
          </div>
        </div>
        <div className="box content-middle">
          {/* Optional middle content can be placed here */}
          <p className="aboutPara">Innovative and dedicated software engineer skilled in full-stack development, agile methodologies, and software testing. Proficient in multiple programming languages and tools, with a proven ability to design and implement scalable, efficient software solutions. Passionate about emerging technologies, collaboration, and continuous learning. Seeking a software engineer internship to enhance IT knowledge and industry exposure.</p>
        </div>
        <div className="box content-right">
          <div className="social-icons">
          <a href="mailto:uthpala9931@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaMailBulk />
      </a>
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://medium.com/@yourprofile" target="_blank" rel="noopener noreferrer">
        <FaMedium />
      </a>
      <a href="https://www.hackerrank.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaHackerrank /> 
      </a>
      <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaGithub /> {/* Replace with an appropriate HackerRank icon if available */}
      </a>
      <a href="https://www.youtube.com/c/yourchannel" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
          </div>
        </div>

        
      </Content>


      <br></br>

      
      <hr></hr>
      <div className='Education'>
          <p> hello</p>
        </div>
      <CustomFooter />
    </Layout>
  );
};

export default Home;
