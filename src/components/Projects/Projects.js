import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import c19wv from "../../assets/Projects/c19wv.PNG";
import metacopy from "../../assets/Projects/metacopy.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          MY RECENT <strong className="purple">WORKS </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={metacopy}
              isBlog={false}
              title="MetaCopy"
              description="A pure python based cross-platform application utilising Google's Tesseract-OCR, PIL and OpenCV to extract text from image."
              link="https://github.com/PratikSonal/MetaCopy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={c19wv}
              isBlog={false}
              title="COVID-19 WorldView"
              description="Track the international statistics of the pandemic. Get a detailed view of the number of comfirmed cases, recoveries, deaths, progression curves and other stats for each affect country."
              link="https://github.com/PratikSonal/COVID-19-WorldView"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
