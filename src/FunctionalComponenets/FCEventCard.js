import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Moment from 'moment';
import EContent from '../Elements/EContent.json'


export default function FCEventCard(props) {
    const [categoryName, setCategoryName] = useState("");

    useEffect(() => {
        for (let index = 0; index < props.categoryNum.length; index++) {
            if (props.categoryNum[index] === props.categoryId) {
                setCategoryName(props.categoryName[index]);
            }
        }
    }, []);


    return (
        <div>
            <Card>
                <CardActionArea>
                    <CardMedia
                        className="eventImg"
                        component="img"
                        alt="event image"
                        height="140"
                        image={props.img}
                        title="Contemplative Reptile"
                    />
                    <br />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{props.name}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{props.content}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{categoryName}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p"> {Moment(props.eventDate).format('YYYY-MM-DD')}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{props.startTime}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{props.price} {EContent.ILS} </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{EContent.participantsAmount} - {props.participantsAmount}</Typography>
                        <Typography gutterBottom variant="h6" component="h2">{EContent.ticketsPurchased} - {props.ticketsPurchased}</Typography>
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
