import { useState } from 'react';
import { Col, Row, Container, Tab, Nav } from 'react-bootstrap';
import { ProjCard } from './ProjCard';
import { CreationCard } from './CreationCard.js';
import TrackVisibility from 'react-on-screen';

import uw from '../assets/img/uw.png';
import insight from '../assets/img/insight ubc.png';
import todo from '../assets/img/todolist.png';
import ice from '../assets/img/ice.png';
import ubcvideo from '../assets/img/ubc video.png';
import p from '../assets/img/placeholder.png';
import myoc from '../assets/img/myoc.png';
import flappyd from '../assets/img/FlappyD thumbnail.png';

export const Project = () => {
  const projects = [
    {
      title: "UBC Insights",
      description: "Streamline university ops with full-stack web app",
      img: insight,
      demo: "https://www.youtube.com/watch?v=6mPwTe0iQeU",
      code: "https://github.com/shaqiumeiying/InsightUBC"
    },
    {
      title: "Underwater Scene - Animation",
      description: "3D scene with hierarchical transformations in Three.js, incorporating creative character designs, animations, and keystroke-driven interactions.",
      img: uw,
      demo: "https://shaqiumeiying.github.io/Underwater-Scene---Javascript-Animation/",
      code: "https://github.com/shaqiumeiying/Underwater-Scene---Javascript-Animation"
    },
    {
      title: "Simple Todo-list",
      description: "A simple to-do list web application that allows users to add, delete, and cross out tasks. Tasks will be presistent even if the window is closed and reopened.",
      img: todo,
      demo: "https://shaqiumeiying.github.io/Simple-Todo-list/",
      code: "https://github.com/shaqiumeiying/Simple-Todo-list"
    }
  ];

  const designs = [
    {
      title: "Immersive 3D Scene",
      description: "A 3D demo scene built with Unity and self-modeled assets, available for 360 demo viewing",
      img: ice,
      demo: "https://momento360.com/e/uc/a42ab28b80eb40848147cb1cf8489edf?utm_campaign=embed&utm_source=other&size=medium&display-plan=true&upload-key=6d54db05d3d14cee8aeac8e92bab136d"
    },
    {
      title: "Original Character Design",
      description: "Character design inspired by my favourite fruits and colors *🍓🍇* Created using Blender. They are NEON and NOEN.",
      img: myoc,
      demo: "https://www.youtube.com/watch?v=_yBl7i3xrz0"
    },
    {
      title: "Work In Progress...",
      description: "Wanna see more? Stay tuned!",
      img: p,
      demo: ""
    }
  ];

  const creations = [
    {
      title: "UBC Medicine Residency Programs: Anatomical Pathology",
      description: "Promotion video about the academic home of The UBC Department of Pathology and Laboratory Medicine.",
      img: ubcvideo,
      demo: "https://www.youtube.com/watch?v=uTztjAcvb94"
    },
    {
      title: "FlappyDiane",
      description: "A flappy bird inspired game created with Unity, Aseprite, FamiStudio and C#.",
      img: flappyd,
      demo: "https://xinyidou.itch.io/flappydiane"
    },
    {
      title: "Work In Progress...",
      description: "Wanna see more? Stay tuned!",
      img: p,
      demo: ""
    }
  ];

  const [activeKey, setActiveKey] = useState('first'); 

  return (
    <TrackVisibility partialVisibility once>
      {({ isVisible }) => (
        <div className={`${isVisible ? "animate__animated animate__fadeInUp" : "hidden"}`}>
          <section className="project" id="projects">
            <Container>
              <Row>
                <Col style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                  <h3>Projects</h3>
                  <p>"Engaging in diverse projects involves tackling various challenges and refining expertise."</p>
                  <Tab.Container id="projects-tabs" activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Code</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Design</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Create</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first" className={activeKey === 'first' ? 'animate__animated animate__fadeIn' : ''}>
                        <Row>
                          {projects.map((project, index) => <ProjCard key={index} {...project} />)}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second" className={activeKey === 'second' ? 'animate__animated animate__fadeIn' : ''}>
                        <Row>
                          {designs.map((design, index) => <CreationCard key={index} {...design} />)}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third" className={activeKey === 'third' ? 'animate__animated animate__fadeIn' : ''}>
                        <Row>
                          {creations.map((creation, index) => <CreationCard key={index} {...creation} />)}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      )}
    </TrackVisibility>
  );
}
