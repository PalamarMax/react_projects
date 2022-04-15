import {useEffect, useState} from "react";

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments/')
            .then(value => value.json())
            .then(value => setComments(value))
    })

    console.log('test');

    return (
        <div>
            {comments.map(value => <div key={value.id}>{value.name}, {value.email}, {value.body}</div>)}
        </div>
    );
};

export default Comments;