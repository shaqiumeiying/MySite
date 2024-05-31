import React from 'react';
import { Col, Row, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Import images
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
import adb from "../assets/img/adb.png";

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

const skillSets = [
    { img: cp, name: 'C, C++, C#' },
    { img: js, name: 'JavaScript' },
    { img: python, name: 'Python' },
    { img: css, name: 'CSS' },
    { img: sql, name: 'SQL' },
    { img: R, name: 'R' }
];

const productivityTools = [
    { img: unity, name: 'Unity' },
    { img: adb, name: 'Adobe Franchise' },
    { img: figma, name: 'Figma' },
    { img: blender, name: 'Blender' },
    { img: ac, name: 'AutoCAD' }
];

const SkillCarousel = ({ title, items }) => (
    <TrackVisibility partialVisibility once>
        {({ isVisible }) => (
            <div className={`skill-bx ${isVisible ? "animate__animated animate__fadeInUp" : "hidden"}`}>
                <h3>{title}</h3>
                <p>"Find some quotes about skills"</p>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                    {items.map((item, index) => (
                        <div className="skill-card" key={index}>
                            <img src={item.img} alt={item.name} />
                            <h4>{item.name}</h4>
                        </div>
                    ))}
                </Carousel>
            </div>
        )}
    </TrackVisibility>
);

export const Skills = () => (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <SkillCarousel title="Technical Skill Sets" items={skillSets} />
                </Col>
            </Row>
            <br /><br /><br /><br />
            <Row>
                <Col>
                    <SkillCarousel title="Productivity Tools" items={productivityTools} />
                </Col>
            </Row>
        </Container>
    </section>
);
