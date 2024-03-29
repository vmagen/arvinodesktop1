import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import logo from '../assets/Logo small.png';
import FCProductManagment from './FCProductManagment';
import EContent from '../Elements/EContent.json'
import { Link } from '@material-ui/core';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function FCSidebar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Tabs className="tabs"
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Link href="\FCHome">
                    <img className="logoSidebar" className="logo" src={logo} />
                </Link>
                <Link href="\FCProductManagment">
                    <Tab label={EContent.ProductManagment} {...a11yProps(0)} />
                </Link>
                <Tab label={EContent.ProfileManagment} {...a11yProps(1)} />
                <Tab label={EContent.WineryDetails} {...a11yProps(2)} />
                <Tab label={EContent.CustomerView} {...a11yProps(3)} />
                <Tab label={EContent.AddWine} {...a11yProps(4)} />
                <Tab label={EContent.AddEvent} {...a11yProps(5)} />
                <Tab label={EContent.AddService} {...a11yProps(6)} />
            </Tabs>
        </div>

    );
}