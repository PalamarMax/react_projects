import {useEffect, useState} from "react";

const Post = () => {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(value => value.json())
            .then(value => setPosts(value))
    },[])

    return (
        <div>
            {posts.map(value => <div key={value.id}>{value.title},{value.body}</div>)}
        </div>
    );
};

export default Post;