import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import emailjs from "emailjs-com";
import "../../style/MyForm.css";

export default function MyForm() {
  function sendEmail(e) {
    e.preventDefault();
    const YOUR_SERVICE_ID = "service_u5dqbty";
    const YOUR_TEMPLATE_ID = "template_0uw7uhm";
    const YOUR_USER_ID = "user_VHRwVv2wo1dOZEHUpaIKA";
    const valorNombre = e.target.user_name.value;
    const valorEmail = e.target.user_email.value;
    const valorMensaje = e.target.message.value;

    if (valorNombre === "" || valorEmail === "" || valorMensaje === "") {
      alert("Debe rellenar todos los campos.");
    } else {
      emailjs
        .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_USER_ID)
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      alert(
        "Gracias " +
          e.target.user_name.value +
          ". Le contestaré tan pronto como sea posible."
      );
      e.target.user_name.value = "";
      e.target.user_email.value = "";
      e.target.message.value = "";
    }
  }

  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <ScrollAnimation animateIn="wobble" initiallyVisible={true}>
              <p className="infForm">Estoy a un par de cliks de tí</p>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
      <Container>
        <form className="contact-form" onSubmit={sendEmail}>
          <Row>
            <Col sm={12}>
              <p className="">*Rellenar los campos obligatorios</p>
            </Col>
            <Col sm={6} className="myPadding">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre* ..."
                name="user_name"
              />
            </Col>
            <Col sm={6} className="myPadding">
              <input
                type="email"
                className="form-control "
                name="user_email"
                placeholder="Email* ..."
              />
            </Col>
            <Col sm={12}>
              <textarea
                className="form-control "
                id="exampleFormControlTextarea1"
                rows="3"
                name="message"
                placeholder="Mensaje* ..."
              ></textarea>
            </Col>
            <Col sm={12} className="sendMsn">
              <input
                type="submit"
                value="Enviar mensaje"
                className=" btn btn-secondary"
              />
            </Col>
          </Row>
        </form>
      </Container>
    </Fragment>
  );
}
