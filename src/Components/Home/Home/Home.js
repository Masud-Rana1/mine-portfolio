import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import devImg from "../../../images/masud2.jpg";
import Navigation from "../../shared/Navigation/Navigation";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
    <Navigation></Navigation>
      <Container>
        <Row>
          <Col className="text-white devDesc" xs={12} md={6}>
            <h6>Hi ,</h6>
            <h1>This is Masud Rana</h1>
            <p>A MERN Stack Web Developer</p>
          </Col>
          <Col className="dev-img w-50" xs={12} md={6}>
            <Image fluid src={devImg} rounded />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
