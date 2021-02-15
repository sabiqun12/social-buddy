import React, { useEffect, useState } from 'react';
import AllPost from '../AllPost/AllPost';


const Home = () => {
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data =>
                setPostData(data))
        // console.log(data));
    }, [])
    console.log(postData)
    return (
        <div>
            {
              postData.map(pd => <AllPost pd={pd}></AllPost>)  
            }
        </div>

    );
};

export default Home;