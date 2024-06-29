import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je suis <span className="purple">Sergeï MILYUKOV </span>
            de <span className="purple">Biarritz, France.</span>
            <br />
            Je suis actuellement en formation de développeur d'applications à l'école Simplon.
            <br />
            Passionné par les nouvelles technologies en constante évolution, je suis convaincu qu'elles offrent de nombreuses opportunités 
            d'innovation et d'amélioration de la qualité de vie.
            <br />
            <br />
            Voici quelques-unes de mes activités préférées en dehors du codage :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer à des jeux
            </li>
            <li className="about-activity">
              <ImPointRight /> Écrire des blogs technologiques
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "S'efforcer de construire des choses qui font la différence !"{" "}
          </p>
          <footer className="blockquote-footer">Sergeï</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
