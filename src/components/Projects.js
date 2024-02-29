import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import Screenshot from "../imgs/Portfolio-screenshot.jpg";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const Projects = () => {
  return (
    <div className="projects" id="Projects">
      <div className="projects-heading">
        <h2>PROJECTS</h2>
      </div>
      <div className="rectangle"></div>
      <div className="project-content-v1">
        <div className="project-left">
          <div className="project-title">
            <h3>Video Game Website</h3>
            <div className="technologies">
              <div className="tech-items">React</div>
              <div className="tech-items">Node</div>
              <div className="tech-items">Express</div>
              <div className="tech-items">Three.js</div>
            </div>
          </div>
          <p className="project-text">
            Redesigned an outdated WordPress website into a React application
            with a Back End server.{" "}
          </p>
          <p className="project-text">
            Leading to a better representation of company's brand image and
            values as well as intuitive user experience.
          </p>

          <div className="project-links">
            {/* MUI BUTTON */}
            <ButtonGroup>
              <Button
                sx={{ fontSize: "16px" }}
                onClick={(e) => {
                  e.preventDefault();
                  openInNewTab("https://floating-axe-website.herokuapp.com/");
                }}
                startIcon={<OpenInNewRoundedIcon />}
                variant="contained"
              >
                Live Demo
              </Button>
              <Button
                sx={{ fontSize: "16px" }}
                onClick={(e) => {
                  e.preventDefault();
                  openInNewTab("https://github.com/SlavLyk/Fas_Website");
                }}
                variant="outlined"
                color="secondary"
              >
                Source Code
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="project-right">
          <div className="video-1">
            <iframe
              src="https://www.youtube.com/embed/Ei5dnPYlii4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            {/* <div className="play-btn1">
              <div className="play-btn2"></div>
            </div> */}
            <div className="line"></div>
          </div>
        </div>
      </div>

      <div className="project-content-v2">
        <div className="project-right-v2">
          <div className="video-2">
            <div className="screenshot"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="project-left-v2">
          <div className="project-title">
            <h3>Portfolio Website</h3>
            <div className="technologies">
              <div className="tech-items">Node</div>
              <div className="tech-items">React</div>
              <div className="tech-items">FlexBox</div>
              <div className="tech-items">Material Ui</div>
            </div>
          </div>
          <p className="project-text">
            Designed a portfolio website in Figma, led the design from a wire
            frame to a finished React, Node.js application.{" "}
          </p>
          <p className="project-text">
            I utilized Material Ui 5 components, created a custom theme and
            learned how to use it in future projects.
          </p>

          <div className="project-links">
            <ButtonGroup>
              <Button
                sx={{ fontSize: "16px" }}
                onClick={(e) => {
                  e.preventDefault();
                  openInNewTab("https://slavlyk-portfolio.netlify.app/");
                }}
                startIcon={<OpenInNewRoundedIcon />}
                variant="contained"
              >
                Live Demo
              </Button>
              <Button
                // sx={{ fontSize: { xl: "16px", lg: "16px" } }}
                sx={{ fontSize: "16px" }}
                onClick={(e) => {
                  e.preventDefault();
                  openInNewTab("https://github.com/SlavLyk/Portfolio_Website");
                }}
                variant="outlined"
                color="secondary"
              >
                Source Code
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
