import React from 'react';
import { Col, Row, Container, Tab } from 'react-bootstrap';
import { ProjCard } from './ProjCard';
import { CreationCard } from './CreationCard.js';
import Nav from 'react-bootstrap/Nav';
import uw from '../assets/img/uw.png';
import insight from '../assets/img/insight ubc.png';
import todo from '../assets/img/todolist.png';
import ice from '../assets/img/ice.png';
import ubcvideo from '../assets/img/ubc video.png';

export const Project = () => {

    const projects = [
      {title: "UBC Insights", 
      description: "Streamline university ops with full-stack web app", 
      img: insight,
      demo:"https://www.youtube.com/watch?v=6mPwTe0iQeU",
      code:"https://github.com/shaqiumeiying/InsightUBC"}, 
      {title: "Underwater Scene - Animation", 
      description: "3D scene with hierarchical transformations in Three.js, incorporating creative character designs, animations, and keystroke-driven interactions.", 
      img: uw,
      demo:"https://shaqiumeiying.github.io/Underwater-Scene---Javascript-Animation/",
      code:"https://github.com/shaqiumeiying/Underwater-Scene---Javascript-Animation"},
      {title: "Todo List", 
      description: "A simple to-do list web application that allows users to add, delete, and cross out tasks.", 
      img: todo,
      demo:"https://shaqiumeiying.github.io/todo-list/",
      code:"https://github.com/shaqiumeiying/todo-list"}
    ]

    const designs = [
      {title: "Immersive 3D Scene", 
      description: "A 3D demo scene built with Unity and self-modeled assets, avilable for 360 demo viewing", 
      img: ice,
      demo:"https://momento360.com/e/uc/a42ab28b80eb40848147cb1cf8489edf?utm_campaign=embed&utm_source=other&size=medium&display-plan=true&upload-key=6d54db05d3d14cee8aeac8e92bab136d"}
    ]


    const creations = [
      {title: "UBC Medicine Residency Programs: Anatomical Pathology", 
      description: "Promotion video about the academic home of The UBC Department of Pathology and Laboratory Medicine.", 
      img: ubcvideo,
      demo:"https://www.youtube.com/watch?v=uTztjAcvb94"}
    ]
    return (
        <section className="project">
            <Container>
                <Row>
                    <Col style={{ paddingLeft: '20px', paddingRight: '20px' }}>
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
                      {
                      designs.map((design, index) => (
                        <CreationCard key={index} {...design} />
                      ))
                    }
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      <Row>
                    {
                      creations.map((creation, index) => (
                        <CreationCard key={index} {...creation} />
                      ))
                    }
                  </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
  );
}