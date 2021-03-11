import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Divider from '@material-ui/core/Divider';
import Efooter from './Elements/EFooter';
import addEventButton from './assets/addEvent.png';
import addServiceButton from './assets/addService.png';
import addWineButton from './assets/addWine.png';
import EContent from './Elements/EContent.json'
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import { Select } from '@material-ui/core';
import FCEvents from './FunctionalComponenets/FCEvents';


const Main = ({ handleToggleSidebar }) => {

  const sortOptions = ["יומי", "שבועי", "חודשי", "שנתי"];
  const wineryId = "1";
  const [option, setOption] = useState("");
  const handleChange = (e) => {
    setOption(e.target.value)
    console.log(option)
  }

  return (
    <container fluid>
      <Row className="homeTopRow">
        <Col xs lg="2">
          <Paper className="addEvent">
            <img className="homePageIcons"
              src={addEventButton} />
            {EContent.addEvent}
          </Paper>
        </Col>
        <Col xs lg="2">
          <Paper className="addEvent">
            <img className="homePageIcons"
              src={addServiceButton} />
            {EContent.addService}
          </Paper>
        </Col>
        <Col xs lg="2">
          <Paper className="addEvent">
            <img className="homePageIcons"
              src={addWineButton} />
            {EContent.addWine}
          </Paper>
        </Col>
      </Row>
      <Divider variant="middle" style={{ margin: 30 }} />
      <Row>
        <Col xs={{ order: 'first' }}>
          <Paper className="MyEvents">
            <Typography> {EContent.MyEvents} </Typography>
            {EContent.sortBy} <Select
              style={{ margin: 5 }}
              onChange={handleChange}>
              {sortOptions.map((option, index) => (
                <option value={index}>{option}</option>
              ))}
            </Select>
            <FCEvents wineryId={wineryId}/>
          </Paper>
        </Col>
        <Col xs xl={4}>
          <Paper className="usersRespons">
            <Typography> {EContent.usersRespons} </Typography>

          </Paper>
        </Col>
        <Col xs={{ order: 'last' }}>
          <Paper className="top10">
            <Typography> {EContent.top10} </Typography>

          </Paper>
        </Col>
      </Row>
      {Efooter}
    </container>

  );
};

export default Main;
