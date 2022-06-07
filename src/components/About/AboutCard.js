import React from "react";
import Card from "react-bootstrap/Card";
import { FaHandPointRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pratik Sonal</span>,
            a passionate Computer Science student from <span className="purple"> Bhubaneswar, India</span>
            <br />I'm an experienced Web and App Developer,
            <br />Currently pursuing my Bachelor in Computer Science from
            <br />
            ITER, Bhubaneswar.
            <br />
            <br />
            Apart from coding, some other activities I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <FaHandPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Reading
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Travelling
            </li>
          </ul>
          <br/>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
