import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl}) => {
    return (
        <Col md={4} className="mb-4">
      <div className="proj-imgbx">
        <img src={imgUrl} alt="nothing"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
    )
}