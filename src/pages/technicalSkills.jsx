import React from 'react';
import { Box, Typography } from '@mui/material';
import { FaReact } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiGithub, SiPostman, SiFigma } from 'react-icons/si';
import { FaNodeJs, FaJava, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { BsFillFileEarmarkCodeFill } from 'react-icons/bs';
import { GrCodeSandbox } from 'react-icons/gr';
import { SiMysql } from 'react-icons/si';

import javascriptImg from '../images/JS.jpeg';
import javaImg from '../images/JAVA.png';
import cImg from '../images/C.png';
import blender from '../images/blender.jpeg';
import capcut from '../images/capcut.jpeg';
import davinci from '../images/davinci.jpeg'
import figma from '../images/figma.png';
import intellij from '../images/intellij.png';
import postgresql from '../images/postgresql.jpeg';
import spring from '../images/spring.jpeg';
import vscode from '../images/vscode.png';

const TechnicalSkills = () => {
  const skillBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80px',
    height: '100px',
    borderRadius: '8px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '10px',
    transition: 'border 0.3s, transform 0.3s',
    '&:hover': {
      border: '2px solid #d76100',
      transform: 'scale(1.05)',
      background: 'rgba(255, 255, 255, 0.2)',
    },
  };

  const skills = [
    { Icon: FaReact, label: 'React', color: '#61DBFB' },
    { Icon: FaHtml5, label: 'HTML', color: '#E34F26' },
    { Icon: FaCss3Alt, label: 'CSS', color: '#1572B6' },
    { src: javaImg, label: 'Java' },
    { src: cImg, label: 'C' }, 
    { src: spring, label: 'Spring Boot', color: '#6DB33F' },
    { src: javascriptImg, label: 'JavaScript' },
    { Icon: SiMongodb, label: 'MongoDB', color: '#4DB33D' },
    { Icon: SiMysql, label: 'MySQL', color: '#00758F' },
    { Icon: FaNodeJs, label: 'Node.js', color: '#68A063' },
    { src: postgresql, label: 'PostgreSQL', },
    { Icon: SiGithub, label: 'GitHub', color: '#181717' },
    { src: intellij, label: 'IntelliJ IDEA'},
    { Icon: SiPostman, label: 'Postman', color: '#FF6C37' }, 
    { src: vscode, label: 'VS Code', color: '#007ACC' },
    { src: davinci, label: ['DaVinci', 'Resolve'], color: '#00A3E0' },
    { src: figma, label: 'Figma'},
    { src: blender, label: 'Blender' }, 
    { src: capcut, label: 'CapCut' }, 
   
  ];

  return (
    <Box
    sx={{
      padding: '60px',
      backgroundColor: '#f5f5f5',
    }}
  >
    <Typography
      variant="h5"
      sx={{
        textAlign: 'center',
        marginBottom: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
       // maxWidth: '600px', // Adjust as needed
        color: "brown", 
        //fontSize: "50px" 
        fontSize: {
          xs: '24px', // font size for extra-small screens
          sm: '32px', // font size for small screens
          md: '40px', // font size for medium screens
          lg: '50px', // font size for large screens
          xl: '60px', // font size for extra-large screens
        },
      }}
    >
      Technologies and Tools
    </Typography>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
      }}
    >
      {skills.map(({ Icon, label, color, src }) => (
        <Box key={label} sx={skillBoxStyle}>
          {src ? (
            <img src={src} alt={label} style={{ width: '40px', height: '40px' }} />
          ) : (
            <Icon style={{ fontSize: '40px', color }} />
          )}
          <Typography
            sx={{
              fontSize: '14px',
              marginTop: '8px',
              color: '#d76100',
              textAlign: 'center',
              whiteSpace: 'nowrap',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
            }}
          >
             {Array.isArray(label) ? (
              label.map((line, index) => (
                <div key={index}>{line}</div> // Render each line separately
              ))
            ) : (
              <div>{label}</div>
            )}
          </Typography>
        </Box>
      ))}
    </Box>
    </Box>
  );
};

export default TechnicalSkills;
