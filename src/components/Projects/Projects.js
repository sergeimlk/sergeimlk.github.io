import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes projets <strong className="purple">récents </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici les projets de développement que j'ai créés:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://bba.a-way.fr/wp-content/uploads/2021/12/Macronutriments.jpg"
              isBlog={false}
              title="[QUIZ] GLP Foods"
              description="Application de quiz pour apprendre à distinguer les type d'aliments (GLP) en les catégrisant."
              ghLink="https://github.com/sergeimlk/QUIZZ"
              demoLink="https://github.com/sergeimlk/QUIZZ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.postimg.cc/02WgwT9J/akidemo.png"
              isBlog={false}
              title="[BI555] DASHBOARD Intéractif"
              description="AKIGORA DASHBOARD permet aux employés de l'entreprise AKIGORA de suivre les données internes pour prenndre de meilleures decisions stratégiques."
              ghLink="https://github.com/sergeimlk/AKIGORA"
              demoLink="https://github.com/sergeimlk/AKIGORA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.postimg.cc/02WgwT9J/akidemo.png"
              isBlog={false}
              title="[ST] DETECTEUR DE PERSONNES"
              description="Durant une semaine, nous avons travaillé sur l'analyse des données récoltées par le capteur pour distinguer plusieurs classes de personnes dans les lieux publics"
              ghLink="https://github.com/sergeimlk/AKIGORA"
              demoLink="https://github.com/sergeimlk/AKIGORA"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;