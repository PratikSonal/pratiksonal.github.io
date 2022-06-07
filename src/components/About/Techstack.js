import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiRust,
  DiGit,
  DiSass
} from "react-icons/di";
import { 
  SiJava,
  SiFlutter,
  SiCplusplus,
  SiGooglecloud,
  SiPytorch, 
  SiTensorflow, 
  SiFirebase, 
  SiQiskit, 
  SiScikitlearn,
  SiDocker,
  SiCmake,
  SiMysql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        [
          <SiCplusplus />,
          <SiJava />,
          <DiJavascript1 />,
          <SiFlutter />,
          <DiNodejs />,
          <DiReact />,
          <DiPython />,
          <DiGit />,
          <DiSass />,
          <SiGooglecloud />,
          <SiMysql />
        ].map(tool => 
          <Col xs={4} md={2} className="tech-icons">
            {tool}
          </Col>)
      }
    </Row>
  );
}

export default Techstack;
