import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useParams } from 'react-router-dom';

const PostDetails = () => {
    const {postId} = useParams();

    const [dataId, setDataId] = useState({});
    
    useEffect( () =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(dataDetails => setDataId(dataDetails))
    },[])
    
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
                           <h3>UserId : {dataId.userId}</h3> 
                            
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                           <h4> Title : {dataId.title}</h4>
                          
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                           <h5> Body : {dataId.body}</h5>
                          
          </Typography>
                    </CardContent>
                <CardActions>
                    <Button  size="small" color="secondary" variant="contained" >
                        Comments
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default PostDetails;