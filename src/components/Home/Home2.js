import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMETTEZ-MOI DE <span className="purple"> ME PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Je suis passionné par le développement d'applications et j'ai acquis des compétences
              fondamentales en développement frontend et backend à l'école Simplon.
              <br />
              <br />Je maîtrise des langages classiques comme
              <i>
                <b className="purple"> HTML, CSS, JS, TS, Flask, Angular, NodeJS, Streamlit, Python, SQL, et Power BI. </b>
              </i>
              <br />
              <br />
              Mes domaines d'intérêt incluent la création de nouvelles&nbsp;
              <i>
                <b className="purple">technologies web et produits</b> ainsi que des domaines liés à{" "}
                <b className="purple">l'intelligence artificielle et au machine learning</b>.
              </i>
              <br />
              <br />
              Chaque fois que possible, j'applique également ma passion pour le développement de produits
              avec <b className="purple">Node.js</b> et
              <i>
                <b className="purple">
                  {" "}
                  des bibliothèques et frameworks JavaScript modernes
                </b>
              </i>
              &nbsp; comme
              <i>
                <b className="purple"> React.js et Next.js</b>.
              </i>
              <br />
              <br />
              En plus de mes compétences techniques, je suis rigoureux, ponctuel et créatif, avec un excellent esprit d'équipe. Ma curiosité et ma motivation me poussent à continuer d'apprendre et à me perfectionner dans le domaine de la programmation.
              <br />
              <br />
              J'ai également animé des ateliers de découverte sur la programmation en Python et les bases de l'IA, partageant mes connaissances et encourageant l'apprentissage au sein de la communauté.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ-MOI SUR</h1>
            <p>
        N'hésitez pas à{" "}
        <a href="mailto:sergei.mlk@hotmail.com" className="purple">
          me contacter
        </a>
      </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sergeimlk"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/serge%C3%AF-milyukov-525661294/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
