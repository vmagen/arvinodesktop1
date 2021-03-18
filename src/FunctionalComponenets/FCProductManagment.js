import React, { useState } from 'react';
import EContent from '../Elements/EContent.json';
import FCSidebar from './FCSidebar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FCWines from './FCWines';
import FCServices from './FCServices';
import FCAddNewService from './FCAddNewService';
import FCAddNewWine from './FCAddNewWine';


export default function FCProductManagment(props) {
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

    return (
        <div className="tabs">
            <FCAddNewService open={openS} handleCloseAddService={handleCloseAddService}/>
            <FCAddNewWine open={openW} handleCloseAddWine={handleCloseAddWine}/>
            <table>
                <tbody>
                    <tr>
                        <td>
                            {EContent.AddService}
                            <Fab color="primary" aria-label="Add">
                                <AddIcon onClick={handleClickOpenAddService}/>
                            </Fab>
                            <br />
                            {EContent.AddWine}
                            <Fab color="primary" aria-label="Add" >
                                <AddIcon onClick={handleClickOpenAddWine}/>
                            </Fab>
                        </td>
                    </tr>
                    <tr>
                        <FCWines wineryId="1" />
                    </tr>
                    <tr>
                        <FCServices wineryId="1" />
                    </tr>
                </tbody>
            </table>
            <FCSidebar />
        </div>
    )
}

