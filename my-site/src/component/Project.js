import React from 'react';
import { Col, Row, Container, Tab } from 'react-bootstrap';
import { ProjCard } from './ProjCard';
import Nav from 'react-bootstrap/Nav';
import uw from '../assets/img/uw.png';

export const Project = () => {

    const projects = [
      {title: "UBC Insights", 
      description: "Description 1", 
      img: uw,
      demo:""}, 
      {title: "Underwater Scene - Animation", 
      description: "Description 2", 
      img: uw,
      demo:"https://shaqiumeiying.github.io/Underwater-Scene---Javascript-Animation/",
      code:"https://github.com/shaqiumeiying/Underwater-Scene---Javascript-Animation"},
      {title: "Todo List", 
      description: "Description 3", 
      img: uw},
      {title: "Embed 3d model", 
      description: "Description 4", 
      img: uw} 
    ]
    return (
        <section className="project">
            <Container>
                <Row>
                    <Col>
                        <h3>Projects</h3>
                        <p>"find some quotes about projects"</p>   
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Code</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Creation</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                      {
                          projects.map((project, index) => {
                            return (
                              <ProjCard key={index} {...project}/>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
  );
}