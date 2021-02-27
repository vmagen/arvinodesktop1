import React from 'react';
import { makeStyles, Typography, Paper } from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FaceIcon from '@material-ui/icons/Face';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import RepeatIcon from '@material-ui/icons/Repeat';
import logo from '../assets/BlackLogo.png';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function ETimeline(props) {

    const classes = useStyles();

    return (
        <Timeline align="alternate">
            <img className="logoTimeLine" src={logo} />
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary" style={{ fontWeight: props.isBold1 }}>
                        מילוי פרטים אישיים
          </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outlined">
                        <FaceIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary" style={{ fontWeight: props.isBold2 }}>
                        מילוי פרטי יקב
          </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outlined">
                        <LocalBarIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outlined">
                        <AccessTimeIcon />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}