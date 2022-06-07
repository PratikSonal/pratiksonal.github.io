import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home2.svg";
import HomeIntro from "./HomeIntro";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span> I'm
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> PRATIK SONAL</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <HomeIntro />
    </section>
  );
}

export default Home;
