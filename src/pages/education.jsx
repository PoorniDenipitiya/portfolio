import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from '@mui/icons-material/School';

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <Typography sx={{ color: "brown", fontSize: "50px", textAlign: 'center',
        marginBottom: '20px', paddingTop: '20px' }}>
        Education
      </Typography>


      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          2021 - 2026
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#d76100" }}>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "#d76100" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Tooltip
            title={
              <React.Fragment>
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#fff",
                    whiteSpace: "pre-line",
                  }}
                >
                  Activities: IEEE WIE, MoraSpirit initiative, FIT Moments, FIT
                  Tunes, Classical Music Society.
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "8px",
                  }}
                >
                  For more info:{" "}
                  <a
                    href="https://www.linkedin.com/in/poorni-denipitiya-4688b2286/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: "4px", color: "inherit" }}
                  >
                    <LinkedInIcon />
                  </a>
                </Typography>
              </React.Fragment>
            }
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  backgroundColor: "#d76100", // Orange background
                  color: "#fff", // White text color
                  fontSize: "14px", // Adjust font size if needed
                },
              },
              arrow: {
                sx: {
                  color: "#d76100", // Match arrow color to background
                },
              },
            }}
          >
            <Typography variant="h6" component="span">
              University of Moratuwa
            </Typography>
          </Tooltip>

          <Typography>Faculty of IT</Typography>
        </TimelineContent>
      </TimelineItem>

      {/*  <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem> */}

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#d76100" }} />
          <TimelineDot sx={{ bgcolor: "#d76100" }}>
          <SchoolIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "#d76100" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              University of Colombo
            </Typography>
          <Typography>
            Diploma in Electronics and automation technologies
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#d76100" }} />
          <TimelineDot sx={{ bgcolor: "#d76100" }}>
          <SchoolIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "#d76100" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Bhatkhande Music Institute
          </Typography>
          <Typography>Sangeeth Visharad(Instrumental)</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          2016 - 2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#d76100" }} />
          <TimelineDot sx={{ bgcolor: "#d76100" }}>
          <SchoolIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "#d76100" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Tooltip
            title={
              <React.Fragment>
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#fff",
                    whiteSpace: "pre-line",
                  }}
                >
                  Activities: Science society, Chess.
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "8px",
                  }}
                >
                  For more info:{" "}
                  <a
                    href="https://www.linkedin.com/in/poorni-denipitiya-4688b2286/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: "4px", color: "inherit" }}
                  >
                    <LinkedInIcon />
                  </a>
                </Typography>
              </React.Fragment>
            }
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  backgroundColor: "#d76100", // Orange background
                  color: "#fff", // White text color
                  fontSize: "14px", // Adjust font size if needed
                },
              },
              arrow: {
                sx: {
                  color: "#d76100", // Match arrow color to background
                },
              },
            }}
          >
            <Typography variant="h6" component="span">
              Samudradevi Balika Vidyalaya, Nugegoda
            </Typography>
          </Tooltip>
          <Typography>Tertiary education: Physical Science Stream</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          2010 - 2016
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#d76100" }} />
          <TimelineDot sx={{ bgcolor: "#d76100" }}>
          <SchoolIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "#d76100" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Tooltip
            title={
              <React.Fragment>
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#fff",
                    whiteSpace: "pre-line",
                  }}
                >
                  Activities: Prefects' Guild, Western Girls' Band, Art Circle, Chess, Swimming.
                  </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "8px",
                  }}
                >
                  For more info:{" "}
                  <a
                    href="https://www.linkedin.com/in/poorni-denipitiya-4688b2286/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: "4px", color: "inherit" }}
                  >
                    <LinkedInIcon />
                  </a>
                </Typography>
              </React.Fragment>
            }
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  backgroundColor: "#d76100", // Orange background
                  color: "#fff", // White text color
                  fontSize: "14px", // Adjust font size if needed
                },
              },
              arrow: {
                sx: {
                  color: "#d76100", // Match arrow color to background
                },
              },
            }}
          >
            <Typography variant="h6" component="span">
              Central College, Piliyandala
              </Typography>
          </Tooltip>
          <Typography>Secondary education</Typography>
          </TimelineContent>
          </TimelineItem>

    </Timeline>
  );
}
