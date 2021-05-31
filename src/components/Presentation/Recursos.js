import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import imagen5 from "../../images/imagen5.jpg";
import "../../style/Presentation.css";
import ScrollAnimation from "react-animate-on-scroll";

export default class Recursos extends Component {
  render() {
    return (
      <div>
        <h1 className="offer">Conocimientos en prácticas</h1>
        <Container>
          <Row>
            <Col>
              <ScrollAnimation
                delay={600}
                animateIn="flipInY"
                animateOut="flipOutY"
              >
                <Image className="myImg" src={imagen5} rounded />
              </ScrollAnimation>
            </Col>
            <Col>
              <ScrollAnimation animateIn="fadeIn">
                <h2 className="mySpace">
                  Creación de contenedores e imágenes para un ERP
                </h2>
              </ScrollAnimation>
              <ScrollAnimation
                delay={600}
                animateIn="tada"
                initiallyVisible={true}
              >
                <h2 className="mySpace">Conocimientos en bases de datos</h2>
              </ScrollAnimation>
              <ScrollAnimation delay={1000} animateIn="flipInX">
                <h2 className="mySpace">Habilidad para trabajar en remoto</h2>
              </ScrollAnimation>
              <ScrollAnimation
                delay={600}
                animateIn="flipInY"
                animateOut="flipOutY"
              >
                <h2 className="mySpace">Con confianza en mis aptitudes</h2>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
        <div className="space2" id="contactame"></div>
      </div>
    );
  }
}
