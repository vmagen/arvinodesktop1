import React from 'react';
import { FaHeart, FaBars } from 'react-icons/fa';
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Divider from '@material-ui/core/Divider';
import Efooter from './Elements/EFooter';

const Main = ({handleToggleSidebar}) => {
  return (
    <container fluid>
      <Row className="justify-content-md-center">
        <Col xs lg="2">
          <div className="box-small"></div>
        </Col>
        <Col xs lg="2">
          <div className="box-small"></div>
        </Col>
        <Col xs lg="2">
          <div className="box-small"></div>
        </Col>
      </Row>
      <Divider variant="middle" style={{ margin: 50 }} />
      <Row>
        <Col xl={{ order: 'first' }}>
          <div className="box-large"></div>
        </Col>
        <Col xl>
          <div className="box-large"></div>
        </Col>
        <Col xl={{ order: 'last' }}>
          <div className="box-large"></div>
        </Col>
      </Row>
      {Efooter}
    </container>

  );
};

export default Main;
