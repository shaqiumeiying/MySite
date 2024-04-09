import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// remember to import images
import R from "../assets/img/R.svg";
import js from "../assets/img/js.svg";
import cp from "../assets/img/CP.svg";
import css from "../assets/img/css.svg";
import sql from "../assets/img/sql.svg";
import python from "../assets/img/python.svg";
import ac from "../assets/img/ac.svg";
import unity from "../assets/img/unity.svg";
import blender from "../assets/img/blender.svg";
import figma from "../assets/img/figma.svg";
import pr from "../assets/img/pr.svg";
import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h3>
                                Technical Skill Sets
                            </h3>
                            <p>"find some quotes about skills"</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="skill-card">
                                    <img src={cp} alt="" />
                                    <h4>C, C++, C#</h4>
                                </div>
                                <div className="skill-card">
                                    <img src={js} alt="" />
                                    <h4>JavaScript</h4>
                                </div>
                                <div className="skill-card">
                                    <img src={python} alt="" />
                                    <h4>Python</h4>
                                </div>
                               
                                <div className="skill-card">
                                    <img src={css} alt="" />
                                    <h4>CSS</h4>
                                </div> 
                                <div className="skill-card">
                                    <img src={sql} alt="" />
                                    <h4>SQL</h4>
                                </div>       
                                <div className="skill-card">
                                    <img src={R} alt="" />
                                    <h4>R</h4>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <div className="skill-bx">
                            <h3>
                                Productivity Tools
                            </h3>
                            <p>"find some quotes about skills"</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="skill-card">
                                    <img src={unity} alt="" />
                                    <h5>Unity</h5>
                                </div>
                                <div className="skill-card">
                                    <img src={pr} alt="" />
                                    <h5>Adobe Premiere</h5>
                                </div>
                                <div className="skill-card">
                                    <img src={figma} alt="" />
                                    <h5>Figma</h5>
                                </div>
                                <div className="skill-card">
                                    <img src={blender} alt="" />
                                    <h5>Blender</h5>
                                </div>
                                <div className="skill-card">
                                    <img src={ac} alt="" />
                                    <h5>AutoCAD</h5>
                                </div>
                            </Carousel>
                        </div>
                </Row>
                
            </Container>
            <img className="background-image-left" scr={colorSharp} />

        </section>
      )
};