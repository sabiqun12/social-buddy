import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useHistory, useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { useContext } from 'react';
import { UserContext } from '../../App';



const PostDetails = (props) => {
    const {PostId} = useParams();

    const [dataId, setDataId] = useState({});
    const [commentId, setCommentId] = useState([]);
    
    useEffect( () =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${PostId}`)
        .then(res => res.json())
        .then(dataDetails => setDataId(dataDetails))

        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => setCommentId(data));

    },[])
   
    //for comments
    const history = useHistory();
    const handleComments = (cId) => {
        const url = `/comments/${cId}`; 
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
                    <Button onClick={() => handleComments(dataId.userId)} size="small" color="secondary" variant="contained" >
                        Comments
                    </Button>
                </CardActions>
                <div>
                 {commentId.map(id => <Comments id = {id}></Comments>)}
                </div>
            </Card>
       
    );
};

export default PostDetails;