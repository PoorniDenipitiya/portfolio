/*import React, { useEffect } from "react";
import M from "materialize-css"; // Import Materialize CSS JS
import './projects.css'; // Assuming external CSS file for styles
import Typography from "@mui/material/Typography";
import software from "../images/software2.jpg";
import uiux from "../images/uiuxnew.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Hardware from "../images/hardware.png";
import coverpage from "../images/cover_page.jpg";
import portfolio from "../images/Portfolio1.jpg";

const Projects = () => {
  useEffect(() => {
    // Initialize the carousel
    const elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, { duration: 200 });
  }, []);

  return (
    <div className="carousel">
    <Typography sx={{ color: "brown", fontSize: "50px", textAlign: 'center',
      marginBottom: '20px' }}>
      Projects
    </Typography>
     
      <div className="carousel-item">
        <img
          src={software}
          alt="CMS"
          title="Assistive CMS for electronic hobbyists"
        />
        <h3>Assistive CMS for electronic hobbyists</h3>
        <p>
          Role: Full Stack developer<br></br>
        Client: Gavesha Labs<br></br>
        Tech Stack: MERN<br></br>
        Domain: Software development<br></br>
      
                  <a
                    href="https://www.linkedin.com/posts/poorni-denipitiya-4688b2286_electronics-cms-mernstack-activity-7253021797124591617--e1w?utm_source=share&utm_medium=member_desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: "2px", color: "inherit" }}
                  >
                    <LinkedInIcon />
                  </a>
        </p>
      </div>
      

      <div className="carousel-item">
        <img
          src={uiux}
          alt="uiux"
          title="Trivia Travels"
        />
        <h3>UI/UX design for Trivia Travels</h3>
        <p>
          Role: UI/UX Designer<br></br>
        Tool: Figma<br></br>
        Domain: UI/UX design<br></br>
      
                  <a
                    href="https://www.linkedin.com/in/poorni-denipitiya-4688b2286/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: "2px", color: "inherit" }}
                  >
                    <LinkedInIcon />
                  </a>
        </p>
      </div>



      <div className="carousel-item">
        <img
          src={coverpage}
          alt="coverpage"
          title="Cover Page"
        />
        <h3>Book cover design</h3>
        <p>
          Role: Graphic Designer<br></br>
        Tool: GIMP<br></br>
        Domain: Graphic design<br></br>
      
        </p>
      </div>


     
      <div className="carousel-item">
        <img
          src={portfolio}
          alt="Portfolio"
          title="Portfolio"
        />
        <h3>Personal portfolio</h3>
        <p>
          Role: Full Stack developer<br></br>
        Library: React<br></br>
        Domain: Software development<br></br>
      
                  <a
                    href="https://www.linkedin.com/in/poorni-denipitiya-4688b2286/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: "2px", color: "inherit" }}
                  >
                    <LinkedInIcon />
                  </a>
        </p>
      </div>



      <div className="carousel-item">
        <img
          src={Hardware}
          alt="Hardware manual"
          title="Hardware Manual"
        />
        <h3>Adaptable P10 LED display controller</h3>
        <p>
        Components: ESP32, Ethernet module, SD card Module, P10 LED display <br></br>
        Client: University of Moratuwa
        Domain: Microcontroller based ICT project<br></br>
      
                  <a
                    href="https://www.linkedin.com/posts/poorni-denipitiya-4688b2286_microcontroller-fit-uom-activity-7219725269459218432-QsHC?utm_source=share&utm_medium=member_desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: "2px", color: "inherit" }}
                  >
                    <LinkedInIcon />
                  </a>
        </p>
      </div>
    </div>
    
  );
};

export default Projects;
*/

import React, { useEffect } from "react";
import M from "materialize-css"; // Import Materialize CSS JS
import "./projects.css"; // Assuming external CSS file for styles
import Typography from "@mui/material/Typography";
import software from "../images/software2.jpg";
import uiux from "../images/uiuxnew.jpg";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon from react-icons
import Hardware from "../images/hardware.png";
import coverpage from "../images/cover_page.jpg";
import portfolio from "../images/Portfolio1.jpg";

const Projects = () => {
  useEffect(() => {
    // Initialize the carousel
    const elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, { duration: 200 });
  }, []);

  return (
    <div className="carousel1">
      <Typography
        sx={{
          color: "brown",
          fontSize: "50px",
          textAlign: "center",
        }}
      >
        Projects
      </Typography>

      <div className="carousel">
        <div className="carousel-item">
          <img
            src={software}
            alt="CMS"
            title="Assistive CMS for electronic hobbyists"
          />
          <h3>Assistive CMS for electronic hobbyists</h3>
          <div className="card_para">
            Role: Full Stack developer
            <br />
            Client: Gavesha Labs
            <br />
            Tech Stack: MERN
            <br />
            Domain: Software development
            <br />
            <a
              href="https://www.linkedin.com/posts/poorni-denipitiya-4688b2286_electronics-cms-mernstack-activity-7253021797124591617--e1w?utm_source=share&utm_medium=member_desktop"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "2px", color: "inherit" }}
              onClick={(e) => e.stopPropagation()} // Added to stop event propagation
            >
              <FaLinkedin style={{ cursor: "pointer" }} />
            </a>
          </div>
        </div>

        <div className="carousel-item">
          <img src={uiux} alt="uiux" title="Trivia Travels" />
          <h3>UI/UX design for Trivia Travels</h3>
          <div className="card_para">
            Role: UI/UX Designer
            <br />
            Client: Trivia Travels
            <br />
            Tech Stack: Figma, Adobe XD
            <br />
            Domain: Travel and Tourism
            <br />
            <a
              href="https://www.linkedin.com/in/poorni-denipitiya-4688b2286"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "2px", color: "inherit" }}
              onClick={(e) => e.stopPropagation()} // Added to stop event propagation
            >
              <FaLinkedin style={{ cursor: "pointer" }} />
            </a>
          </div>
        </div>

        <div className="carousel-item">
          <img src={coverpage} alt="coverpage" title="Cover Page" />
          <h3>Book cover design</h3>
          <div className="card_para">
            Role: Graphic Designer<br></br>
            Tool: GIMP<br></br>
            Domain: Graphic design<br></br>
          </div>
        </div>

        <div className="carousel-item">
          <img src={portfolio} alt="Portfolio" title="Portfolio" />
          <h3>Personal portfolio</h3>
          <div className="card_para">
            Role: Full Stack developer
            <br />
            Library: React
            <br />
            Domain: Software development
            <br />
            <a
              href="https://www.linkedin.com/in/poorni-denipitiya-4688b2286"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "2px", color: "inherit" }}
              onClick={(e) => e.stopPropagation()} // Added to stop event propagation
            >
              <FaLinkedin style={{ cursor: "pointer" }} />
            </a>
          </div>
        </div>

        <div className="carousel-item">
          <img src={Hardware} alt="Hardware manual" title="Hardware Manual" />
          <h3>Adaptable P10 LED display controller</h3>
          <div className="card_para">
            Components: ESP32, Ethernet module, SD card Module, P10 LED display{" "}
            <br></br>
            Client: University of Moratuwa Domain: Microcontroller based ICT
            project<br></br>
            <a
              href="https://www.linkedin.com/posts/poorni-denipitiya-4688b2286_microcontroller-fit-uom-activity-7219725269459218432-QsHC?utm_source=share&utm_medium=member_desktop"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "2px", color: "inherit" }}
              onClick={(e) => e.stopPropagation()}
            >
              <FaLinkedin style={{ cursor: "pointer" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
