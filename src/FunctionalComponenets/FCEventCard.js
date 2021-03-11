import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});



export default function FCEventCard(props) {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.img}
                        title="eventImgPath"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{props.eventName}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{props.category}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{props.eventDate}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{props.startTime}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{props.price}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{props.eventId}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{props.participantsAmount}</Typography>
                        <Typography gutterBottom variant="h6" component="h2">{props.ticketsPurchased}</Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
        </Button>
                    <Button size="small" color="primary">
                        Learn More
        </Button>
                </CardActions>
            </Card>
        </div>
    )
}
