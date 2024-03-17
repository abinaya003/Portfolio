import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Pokemon from "../../Assets/Projects/Pokemon.png";

import LazyPagination from "../../Assets/Projects/Lazy_Pagination.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pokemon}
              isBlog={false}
              title="Pokemon"
              description="This is an application which will give all the characteristic of Pokemon characters"
              ghLink="https://github.com/abinaya003/Abinaya-Pokemon"
              demoLink="https://abinaya-pokemon.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LazyPagination}
              isBlog={false}
              title="Lazy Pagination"
              description="This is a demo page which will show how the lazy pagination works like e-commerce websites like Flipkart"
              ghLink="https://gitlab.com/abinaya1250842/lazy-pagination"
              demoLink="https://lazy-pagination-project.vercel.app/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
