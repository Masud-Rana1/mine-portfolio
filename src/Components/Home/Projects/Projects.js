import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <h1 className="text-center m-5">Projects</h1>
      <Row className="Projects" xs={12} md={4} xl={4}>
        <Col>
          <Card style={{ width: "18rem", height: "30rem" }}>
            <Card.Img
              variant="top"
              src="https://doctors-portal2-53fc7.web.app/static/media/doctor.0a279a5b65e8258865bf.png"
            />
            <Card.Body>
              <Card.Title>Wooden Craft & Stationary Shop</Card.Title>
              <Card.Text>
                We have been marketing our products to several countries in the
                world such as America, Australia, and other countries while
                ensuring the quality of products in accordance
              </Card.Text>
            </Card.Body>{" "}
            <Button
              variant="primary"
              href="https://doctors-portal2-53fc7.web.app/"
              target="_blank"
            >
              Live Site
            </Button>
          </Card>
          <Card style={{ width: "18rem", height: "30rem" }}>
            <Card.Img
              variant="top"
              src="https://woodencraft-a5d47.web.app/static/media/950x350-banner-craft-stationery.68595050.jpg"
            />
            <Card.Body>
              <Card.Title>Wooden Craft & Stationary Shop</Card.Title>
              <Card.Text>
                We have been marketing our products to several countries in the
                world such as America, Australia, and other countries while
                ensuring the quality of products in accordance
              </Card.Text>
            </Card.Body>{" "}
            <Button
              variant="primary"
              href="https://woodencraft-a5d47.web.app/home"
              target="_blank"
            >
              Live Site
            </Button>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem", height: "30rem" }}>
            <Card.Img
              variant="top"
              src="https://i.ibb.co/3YX22fD/248946007-2132729603531679-5314155504944547098-n.jpg"
            />
            <Card.Body>
              <Card.Title>Wooden Craft & Stationary Shop</Card.Title>
              <Card.Text>
                We have been marketing our products to several countries in the
                world such as America, Australia, and other countries while
                ensuring the quality of products in accordance
              </Card.Text>
            </Card.Body>
            <Button
              variant="primary"
              href="https://raika-eco-resort.web.app/home"
              target="_blank"
            >
              Live Site
            </Button>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem", height: "30rem" }}>
            <Card.Img
              variant="top"
              src="https://i.ibb.co/8Nz38Pk/citiscan-1.jpg"
            />
            <Card.Body>
              <Card.Title>Wooden Craft & Stationary Shop</Card.Title>
              <Card.Text>
                We have been marketing our products to several countries in the
                world such as America, Australia, and other countries while
                ensuring the quality of products in accordance
              </Card.Text>
            </Card.Body>
            <Button
              variant="primary"
              href="https://medica-32265.web.app/home"
              target="_blank"
            >
              Live Site
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Projects;
