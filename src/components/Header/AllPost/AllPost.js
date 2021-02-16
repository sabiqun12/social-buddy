import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';


const AllPost = (props) => {
    const { id, title } = props.pd;

    const history = useHistory();

    const handlePostButton = (PostId) => {
        const url = `/allPost/${PostId}`;
        history.push(url);

    }
    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
            padding: '20px',
            marginLeft: '550px',
            margin: '20px'
        },
    });

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {id}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => handlePostButton(id)} size="small" color="primary" variant="contained" >
                        Show more
                    </Button>
                </CardActions>
            </Card>
        </div>



    );
};

export default AllPost;