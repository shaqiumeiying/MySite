import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import LinkedIn from '../assets/img/linkedin.png';
import Steam from '../assets/img/steam.png';
import GitHub from '../assets/img/github.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={2}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={10} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/xinyi-dou/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="Icon" /></a>
              <a href="https://github.com/shaqiumeiying" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="Icon" /></a>
              <a href="https://steamcommunity.com/profiles/76561198165851652/" target="_blank" rel="noopener noreferrer"><img src={Steam} alt="Icon" /></a>
            </div>
            <p>Copyright © 2024 <a href="https://github.com/yourusername">Xinyi Dou</a>. All rights reserved. </p>

          </Col>
        </Row>
      </Container>
    </footer>
  )
}