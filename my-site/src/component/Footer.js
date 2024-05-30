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
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={LinkedIn} alt="Icon" /></a>
              <a href="#"><img src={GitHub} alt="Icon" /></a>
              <a href="#"><img src={Steam} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}