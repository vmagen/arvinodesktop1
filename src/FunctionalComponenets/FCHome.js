import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import FCAddNewService from './FCAddNewService';
import FCAddNewWine from './FCAddNewWine';

export default function FCHome() {
    const sortOptions = ["יומי", "שבועי", "חודשי", "שנתי"];
    const wineryId = "1";
    const [option, setOption] = useState("");
    const [openS, setOpenS] = useState(false);
    const [openW, setOpenW] = useState(false);

    const handleClickOpenAddService = () => {
        setOpenS(true);
    };

    const handleCloseAddService = () => {
        setOpenS(false);
    };
    
    const handleClickOpenAddWine = () => {
        setOpenW(true);
    };

    const handleCloseAddWine = () => {
        setOpenW(false);
    };

    const handleChange = (e) => {
        setOption(e.target.value)
        console.log(option)
    }

    return (
        <div className="tabs">
            <FCAddNewService open={openS} handleCloseAddService={handleCloseAddService} />
            <FCAddNewWine open={openW} handleCloseAddWine={handleCloseAddWine} />
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Paper className="minipaper">
                                <img className="homePageIcons"
                                    src={addEventButton} 
                                    />
                                {EContent.addEvent}
                            </Paper>
                        </td>
                        <td>
                            <Paper className="minipaper">
                                <img className="homePageIcons"
                                    src={addServiceButton} 
                                    onClick={handleClickOpenAddService}/>
                                {EContent.addService}
                            </Paper>
                        </td>
                        <td>
                            <Paper className="minipaper">
                                <img className="homePageIcons"
                                    src={addWineButton} 
                                    onClick={handleClickOpenAddWine}/>
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
