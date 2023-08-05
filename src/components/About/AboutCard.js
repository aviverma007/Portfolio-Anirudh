import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anirudh Verma </span>
            from <span className="purple"> Delhi, India.</span>
            <br /> I am a final year student pursuing an Integrated Btech-CS in
            Artificial intellegence(AI).
            <br />
            Additionally, I am currently Learning advanced-Android Development
            through Online Courses.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Developing WebApps
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Anirudh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
