import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircleFill } from "react-bootstrap-icons";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() * 100); // Adjust deleting speed
    const toDisplay = [ "Coding", "UX/UI", "Software Development", "Video Editing","Content Creating"];
    const period = 2000;
    const wordDelay = 1000; // Adjust the duration of the pause before each word starts typing
   
    useEffect(() => {

      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text, delta, isDeleting, index, loopNum])
  
    const tick = () => {
      let i = loopNum % toDisplay.length;
      let fullText = toDisplay[i];

      // Check if all characters have been typed or deleted
      if (text === fullText && isDeleting === false) {
          // Pause before typing the next word
          setTimeout(() => {
              setIsDeleting(true);
              setDelta(period);
          }, wordDelay);
      }

      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
          setDelta(prevDelta => prevDelta / 1.6);
      }

      if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
      } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(300 - Math.random() * 100);
      } else {
          setIndex(prevIndex => prevIndex + 1);
      }
  };

  return (
      <section className="banner" id="home">
        <div className="banner-content">
          <Container>
              <Row className="align-items-center">
                  <Col xs={12} md={6} xl={7}>   
                      <span className="tagline">Welcome to my Protfolio</span>
                      <h1>{`I'm Diana , I Love `}<span className="wrap">{text}</span></h1>
                      <br></br>
                      <p>This is a placeholder for about me This is a placeholder for about meThis is a placeholder for about meThis is a placeholder for about meThis is a placeholder for about meThis is a placeholder for about meThis is a placeholder for about meThis is a placeholder for about meThis is a placeholder for about me</p>
                      <br></br>
                      <button onClick={() => console.log('loading pdf in another page')}>My Resume<ArrowRightCircleFill size={25} /></button>
                  </Col>
                  <Col xs={12} md={6} xl={5}>  
                  <img src={""} alt="Header Img"/>  
                  </Col>
      
                            
               
              </Row>
          </Container>
        
        </div>
      </section>
  );
};
