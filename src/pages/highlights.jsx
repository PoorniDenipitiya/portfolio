import React from 'react';
import './highlights.css'; // Import your CSS file for styles
import Typography from "@mui/material/Typography";
import sysco from '../images/ivSysco.jpg';
import fit21 from '../images/fit21.jpg';
import software from '../images/soft.jpg';
import orchestra from '../images/orchestra.jpg';
import calcey from '../images/calcey.jpg';
import moraspirit from '../images/moraspirit.jpg';
import careerfair from '../images/careerfair.jpeg';
import Coffee from '../images/coffee.jpeg';
import Hardware from '../images/hardware.jpg';
import band from '../images/band.jpg';
import visharad from '../images/visharad1.jpeg';
import IEEE from '../images/IEEE.jpg';

const Highlight = () => {
  const images = [
    {
      src: sysco,
      alt: 'Sysco Project',
      title: 'Sysco Meetup',
      description: 'First In-Person Connect @SyscoLabs with Project Summit Team',
    },
    {
      src: fit21,
      alt: 'Fit21',
      title: 'Batchmates Unite',
      description: 'FIT21 Family @ITFac-UoM',
    },
    {
      src: software,
      alt: 'Software',
      title: 'Software Squad',
      description: 'Coding Together @ITFac-UoM',
    },
    {
      src: orchestra,
      alt: 'Orchestra Performance',
      title: 'Orchestra Harmony',
      description: 'Musical Bonds @Megayen Obbata',
    },
    {
      src: calcey,
      alt: 'Calcey',
      title: 'Calcey Visit',
      description: 'Industry Insights @Calcey',
    },
    {
      src: moraspirit,
      alt: 'MoraSpirit Event',
      title: 'Epilogue Victory',
      description: 'Guiding the Charge @Epilogue23 with MoraSpirit team @UoM',
    },
    {
      src: careerfair,
      alt: 'Career Fair',
      title: 'Career Fair Moment',
      description: 'Coordinating Success @Career Fair @ITFac-UoM',
    },
    {
      src: Coffee,
      alt: 'Coffee with Dean',
      title: 'Coffee with Dean',
      description: 'Performing @Coffee with Dean',
    },
    {
      src: Hardware,
      alt: 'Hardware Project',
      title: 'Hardware Heroes',
      description: 'Building Futures @ITFac-UoM',
    },
    {
      src: band,
      alt: 'Band Performance',
      title: 'Drumline Finale',
      description: 'Last Beat @Western Girls Band @PCC',
    },
    {
      src: visharad,
      alt: 'Visharad',
      title: 'Visharad Milestone',
      description: 'Celebrating Visharad Triumph',
    },
    {
      src: IEEE,
      alt: 'Most Outstanding Volunteer of Term 23/24',
      title: 'IEEE Excellence',
      description: 'Recognized as the Most Outstanding Volunteer of Term 23/24 @IEEE WIE Affinity Group @UoM',
    },    
  ];

  return (
    <div>
      <Typography 
        sx={{ color: "brown", fontSize: "50px", textAlign: 'center', marginBottom: '20px' }}>
        Highlights
      </Typography>
      <div className="highlight-container">
        {images.map((image, index) => (
          <div className="highlight-item" key={index}>
            <img src={image.src} alt={image.alt} className="highlight-image" />
            <div className="highlight-overlay">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlight;
