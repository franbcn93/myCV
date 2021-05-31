import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "../../style/Presentation.css";
import { sobreMi, keys, keys2 } from "../Text/Text";
import ScrollAnimation from "react-animate-on-scroll";
import Skills from "./Skills";
import Recursos from "./Recursos";

export default class Presentation extends Component {
  render() {
    return (
      <>
        <div className="section-1 box">
          <Row>
            <Col xs={12} sm={4}>
              <ScrollAnimation delay={1440} animateIn="fadeIn">
                <h1 className="myAdj">Versatil</h1>
              </ScrollAnimation>
              <ScrollAnimation delay={960} animateIn="fadeIn">
                <h1 className="myAdj">Trabajador</h1>
              </ScrollAnimation>
            </Col>
            <Col xs={12} sm={4}>
              <ScrollAnimation delay={1280} animateIn="fadeIn">
                <h1 className="myAdj">Responsable</h1>
              </ScrollAnimation>
              <ScrollAnimation delay={800} animateIn="fadeIn">
                <h1 className="myAdj">Colaborador</h1>
              </ScrollAnimation>
            </Col>
            <Col>
              <Col xs={12} sm={4} className="myCol">
                <ScrollAnimation delay={1120} animateIn="fadeIn">
                  <h1 className="myAdj">Motivador</h1>
                </ScrollAnimation>
                <ScrollAnimation delay={640} animateIn="fadeIn">
                  <h1 className="myAdj">Objetivo</h1>
                </ScrollAnimation>
                <ScrollAnimation delay={480} animateIn="fadeIn">
                  <h1 className="myAdj">Inquieto</h1>
                </ScrollAnimation>
                <ScrollAnimation delay={320} animateIn="fadeIn">
                  <h1 className="myAdj">Sensato</h1>
                </ScrollAnimation>
                <ScrollAnimation delay={160} animateIn="fadeIn">
                  <h1 className="myAdj">Flexible</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">
                  <h1 className="myAdj">Atento</h1>
                </ScrollAnimation>
              </Col>
            </Col>
          </Row>
        </div>
        <Row>
          <Col>
            <div id="sobremi" className="space4"></div>
            <div class="section-2 box">
              <h1 className="titleName">Francisco París Albero</h1>
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
              >
                <ol className="mySentences">{sobreMi}</ol>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="bounceInLeft"
                animateOut="bounceOutRight"
              >
                <ol className="mySentences">{keys}</ol>
                <ol className="mySentences2">Miguel de Unamuno</ol>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
              >
                <ol className="mySentences">{keys2}</ol>
                <ol className="mySentences2 pauloEnd">Paulo Coelho</ol>
              </ScrollAnimation>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="section-3 box"></div>
          </Col>
        </Row>
        <div id="habilidades" className="space3"></div>
        <Row>
          <Col>
            <div className="section-4 box">
              <Skills />
            </div>
            <div className="space3" id="recursos"></div>
          </Col>
        </Row>
        <Row className="myresources">
          <Col>
            <div className="section-5 box">
              <Recursos />
            </div>
          </Col>
        </Row>

        {/* <Row>
          <Col className="paddingCol">
            <div className="clip-path">
              <div className="content box">
                <h1>{Animation()}</h1>
                <p>{text1}</p>
              </div>
            </div>
          </Col>
        </Row> */}
      </>
    );
  }
}
