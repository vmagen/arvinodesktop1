import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Divider from '@material-ui/core/Divider';
import Efooter from '../Elements/EFooter';
import addEventButton from '../assets/addEvent.png';
import addServiceButton from '../assets/addService.png';
import addWineButton from '../assets/addWine.png';
import EContent from '../Elements/EContent.json';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import { Select } from '@material-ui/core';
import FCEvents from './FCEvents';
import FCSidebar from './FCSidebar';

export default function FCHome() {
    const sortOptions = ["יומי", "שבועי", "חודשי", "שנתי"];
    const wineryId = "1";
    const [option, setOption] = useState("");
    const handleChange = (e) => {
        setOption(e.target.value)
        console.log(option)
    }

    return (
        <div className="tabs">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Paper className="minipaper">
                                <img className="homePageIcons"
                                    src={addEventButton} />
                                {EContent.addEvent}
                            </Paper>
                        </td>
                        <td>
                            <Paper className="minipaper">
                                <img className="homePageIcons"
                                    src={addServiceButton} />
                                {EContent.addService}
                            </Paper>
                        </td>
                        <td>
                            <Paper className="minipaper">
                                <img className="homePageIcons"
                                    src={addWineButton} />
                                {EContent.addWine}
                            </Paper>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Paper className="usersRespons">
                                <Typography gutterBottom variant="h5" component="h2"> {EContent.usersRespons} </Typography>
                            </Paper>
                        </td>
                        <td>
                            <Paper className="top10">
                                <Typography gutterBottom variant="h5" component="h2"> {EContent.top10} </Typography>
                            </Paper>
                        </td>
                        <td>
                            <Paper className="MyEvents">
                                <Typography gutterBottom variant="h5" component="h2"> {EContent.MyEvents} </Typography>
                                {EContent.sortBy} <Select
                                    style={{ margin: 5 }}
                                    onChange={handleChange}>
                                    {sortOptions.map((option, index) => (
                                        <option value={index}>{option}</option>
                                    ))}
                                </Select>
                                <FCEvents wineryId={wineryId} />
                            </Paper>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="3">
                            {Efooter}
                        </td>
                    </tr>
                </tbody>
            </table>
            <FCSidebar />
        </div>
    )
}
