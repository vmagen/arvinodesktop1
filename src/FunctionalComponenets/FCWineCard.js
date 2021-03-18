import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EContent from '../Elements/EContent.json'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function FCWineCard(props) {
    const classes = useStyles();
    const [categoryName, setCategoryName] = useState("");

    useEffect(() => {
        fetch(`https://localhost:44370/api/WineCategory`,
            {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json; charset=UTF-8',
                })
            })
            .then(res => {
                console.log('res=', res);
                console.log('res.status', res.status);
                console.log('res.ok', res.ok);
                return res.json()
            })
            .then(
                (result) => {
                    for (let index = 0; index < result.length; index++) {
                        if (result[index].categoryId === props.categoryId) {
                            setCategoryName(result[index].categoryName);
                        }
                    }
                },
                (error) => {
                    console.log("err post=", error);
                });
    }, []);

    return (
        <td>
            <Card className={classes.root}>
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
                        <Typography gutterBottom variant="h5" component="h2">{EContent.wine} {props.name}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{props.content}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{EContent.category} - {categoryName}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{props.price} {EContent.ILS} </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">{EContent.delete}</Button>
                    <Button size="small" color="primary">{EContent.edit}</Button>
                </CardActions>
            </Card>
        </td>
    )
}
