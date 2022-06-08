import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FilesIcon from '../../assets/files.svg';
import Button from "react-bootstrap/Button";
import pdf from "../../assets/../assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/PratikSonal/pratiksonal.github.io/master/src/assets/Resume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
        <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "100px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "4em"}}>
              MY 
              <br/><strong className="purple"> RESUME</strong>
            </h1>
          </Col>
          <Col
            md={4}
            style={{ padding: "50px" }}
            className="about-img"
          >
            <img src={FilesIcon} alt="filesicon" className="img-fluid" />
          </Col>

          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
