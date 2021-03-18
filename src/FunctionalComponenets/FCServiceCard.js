import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EContent from '../Elements/EContent.json';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function FCServiceCard(props) {
    const classes = useStyles();

    return (
        <td>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{props.name}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{props.content}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{EContent.category} - {props.category}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{props.price} {EContent.ILS} </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">{EContent.delete}</Button>
                    <Button size="small" color="primary">{EContent.edit}</Button>
                    <Button size="small" color="primary">{EContent.watchImg}</Button>
                </CardActions>
            </Card>
        </td>
    )
}
