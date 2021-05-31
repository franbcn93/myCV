import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import "../../style/Skills.css";

export default class Skills extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <h1>Habilidades</h1>
            </Col>
          </Row>
          <Row className="paddingTop">
            <Col>
              <ScrollAnimation animateIn="bounceInUp">
                <Card className="myCard">
                  <h2 className="skills">Java</h2>
                </Card>
              </ScrollAnimation>
            </Col>
            <Col>
              <ScrollAnimation delay={100} animateIn="bounceInUp">
                <Card className="myCard">
                  <h2 className="skills">JavaScript</h2>
                </Card>
              </ScrollAnimation>
            </Col>
            <Col>
              <ScrollAnimation delay={200} animateIn="bounceInUp">
                <Card className="myCard">
                  <h2 className="skills">Pyhton</h2>
                </Card>
              </ScrollAnimation>
            </Col>
            <Col>
              <ScrollAnimation delay={300} animateIn="bounceInUp">
                <Card className="myCard">
                  <h2 className="skills">PHP</h2>
                </Card>
              </ScrollAnimation>
            </Col>
          </Row>

          <Row className="paddingTop">
            <Col>
              <ScrollAnimation delay={400} animateIn="bounceInUp">
                <Card className="myCard">
                  <h2 className="skills">SQL</h2>
                </Card>
              </ScrollAnimation>
            </Col>
            <Col>
              <ScrollAnimation delay={500} animateIn="bounceInUp">
                <Card className="myCard">
                  <h2 className="skills">MySQL</h2>
                </Card>
              </ScrollAnimation>
            </Col>
            <Col>
              <ScrollAnimation delay={900} animateIn="bounceInUp">
                <Card className="myCard">
                  <h2 className="skills">JSON</h2>
                </Card>
              </ScrollAnimation>
            </Col>
            <Col>
              <ScrollAnimation delay={800} animateIn="bounceInUp">
                <Card className="myCard">
                  <h2 className="skills">XML</h2>
                </Card>
              </ScrollAnimation>
            </Col>
          </Row>

          <Row className="paddingTop">
            <Col>
              <ScrollAnimation delay={600} animateIn="bounceInUp">
                <Card className="myCard">
                  <h2 className="skills">HTML</h2>
                </Card>
              </ScrollAnimation>
            </Col>
            <Col>
              <ScrollAnimation delay={700} animateIn="bounceInUp">
                <Card className="myCard">
                  <h2 className="skills">CSS</h2>
                </Card>
              </ScrollAnimation>
            </Col>
            <Col>
              <ScrollAnimation delay={800} animateIn="bounceInUp">
                <Card className="myCard">
                  <h2 className="skills">Git</h2>
                </Card>
              </ScrollAnimation>
            </Col>
            <Col>
              <ScrollAnimation delay={900} animateIn="bounceInUp">
                <Card className="myCard">
                  <h2 className="skills">Android Studio</h2>
                </Card>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
