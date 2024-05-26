import { Col, Button } from "react-bootstrap";

export const ProjCard = ({ title, description, img, demo, code}) => {

  const handleDemo = () => {
    window.open(demo, "_blank");
  };

  const handleCode = () => {
    window.open(code, "_blank");
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={img} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <br />
          <Button onClick={handleDemo} variant="primary" style={{ marginRight: '10px' }}>
            Demo
          </Button>
          <Button onClick={handleCode} variant="primary" style={{ paddingLeft: '16px', paddingRight: '16px'}}>
            Code
          </Button>
        </div>
      </div>
    </Col>
  )
}