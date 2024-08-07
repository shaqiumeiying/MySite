import { Button, Col } from 'react-bootstrap';  // Assuming you are using react-bootstrap for Button and Col
import Tilt from 'react-tilt';  // Assuming you are using react-tilt for Tilt effect

export const CreationCard = ({ title, description, img, demo, code }) => {
  
  const handleDemo = () => {
    if (demo) {
      window.open(demo, "_blank");
    }
  };

  const handleCode = () => {
    if (code) {
      window.open(code, "_blank");
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <Tilt>
        <div className="proj-imgbx">
          <img src={img} alt='' />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <br />
            <br />
            {demo && (
              <Button onClick={handleDemo} variant="dark" style={{ marginRight: '10px' }}>
                Demo
              </Button>
            )}
            {title === "FlappyDiane" && code && (
              <Button onClick={handleCode} variant="dark">
                Code
              </Button>
            )}
          </div>
        </div>
      </Tilt>
    </Col>
  );
};
