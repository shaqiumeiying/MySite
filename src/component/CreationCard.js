import { Col, Button } from "react-bootstrap";

export const CreationCard = ({ title, description, img, demo }) => {
  
  const handleDemo = () => {
    window.open(demo, "_blank");
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={img} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <br />
          <Button onClick={handleDemo} variant="dark" style={{ marginRight: '10px' }}>
            Demo
          </Button>
        </div>
      </div>
    </Col>
  );
};
