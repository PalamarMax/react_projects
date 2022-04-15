import {useEffect, useState} from "react";

const Users = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        console.log('rendering')
        // fetch('https://jsonplaceholder.typicode.com/users/')
        //     .then(value => value.json())
        //     .then(value => setUsers(value))

    })

    return (
        <div>
            {users.map(value => <div key={value.id}>{value.name} <button>Posts</button></div>)}
        </div>
    );
};

export default Users;