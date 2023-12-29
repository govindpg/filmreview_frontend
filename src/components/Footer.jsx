import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-primary">
      <div className="container-fluid" style={{ height: "300px" }}>
        <Row >
          <Col lg={4} className="d-flex mt-4 justify-content-center align-items-center ">
            <i class="fa-solid fa-film me-2 text-white fa-2xl"></i>
            <h3 className="text-white">CritiCine</h3>
          </Col>
          <Col lg={4} className="mt-4 d-flex justify-content-center align-items-center flex-column ">
            <h3 className="text-white">Useful link</h3>
            <ul style={{listStyle:'none'}} >
              <li>
                <Link style={{textDecoration:'none'}} className="text-white">Home</Link>
              </li>
              <li>
                <Link style={{textDecoration:'none'}} className="text-white">Watch later</Link>
              </li>
            </ul>
          </Col>

          <Col  className="mt-4  d-flex justify-content-center align-items-center flex-column " lg={4}>
            <h3 className="text-white">Social Handles</h3>
            <ul style={{listStyle:'none'}} >
              <li className="text-white">
                <i class="fa-solid fa-phone text-white"></i>+874538
              </li>
              <li className="text-white">
              <i class="fa-solid fa-envelope"></i>criticflm@gmail.com
              </li>
           
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
