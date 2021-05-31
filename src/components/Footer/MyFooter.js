import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style/Footer.css";

export default class MyFooter extends Component {
  render() {
    return (
      <>
        <footer className="mainfooter" role="contentinfo">
          <Container>
            <Row>
              {/* <Col></Col> */}
              <Col>
                <div className="footer-middle">
                  <h2 className="knowMe">Saber más...</h2>
                  <ul class="social-network social-circle">
                    <li>
                      <a
                        href="https://www.facebook.com/francisco.p.albero"
                        class="icoFacebook"
                        title="Facebook"
                      >
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/FranciscoParisA"
                        class="icoLinkedin"
                        title="Linkedin"
                      >
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/franciscoparisalbero1/"
                        class="icoInstagram"
                        title="Instagram"
                      >
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+34647410533"
                        class="icoMobile"
                        title="+34 647410533"
                      >
                        <i class="fa fa-mobile"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:franciscoparisalbero@gmail.com"
                        class="icoEnvelope"
                        title="Envíame un correo"
                      >
                        <i class="fa fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              {/* <Col></Col> */}
            </Row>
            <Row>
              <Col>
                <hr className="line"></hr>
                <h5 class="text-center">
                  <strong>&copy; Copyright {new Date().getFullYear()}</strong>-
                  Francisco París Albero. Todos los derechos están reservados.
                </h5>
              </Col>
            </Row>
          </Container>
          {/* <div class="col-md-6"></div> */}
          {/* <div class="row">
            <div class="col-md-12 copy">
              <h5 class="text-center">
                <strong>&copy; Copyright {new Date().getFullYear()}</strong>-
                Francisco París Albero. Todos los derechos están reservados.
              </h5>
            </div>
          </div> */}
        </footer>
      </>
    );
  }
}
