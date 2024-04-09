import React from 'react';
import { Col, Row, Container, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import Nav from 'react-bootstrap/Nav';

export const Projects = () => {

    const projects = [
      {title: "UBC Insights", 
      description: "Description 1", 
      img: "img"}, 
      {title: "Underwater Scene - Animation", 
      description: "Description 2", 
      img: "img"},
      {title: "Todo List", 
      description: "Description 3", 
      img: "img"},
      {title: "Embed 3d model", 
      description: "Description 4", 
      img: "img"} 
    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h3>Projects</h3>
                        <p>"find some quotes about projects"</p>   
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                      {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project}/>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
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