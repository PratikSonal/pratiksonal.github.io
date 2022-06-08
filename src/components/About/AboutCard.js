import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pratik Sonal </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            <br />I am currently pursuing my Undergraduate in Computer Science in ITER, Bhubaneswar
            <br />
            <br />Apart from coding, you can find me spending my time playing games, reading and travelling!
            <br />
            <br />
          </p>

          <p className="purple">
            "Trying to make a difference, one code at a time!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
