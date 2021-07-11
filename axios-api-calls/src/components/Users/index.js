import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState(null)
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                setUsers(persons);
            })
    }

    return (
        users ? <ul> {users.map(user => {
            return <li>{user.name}</li>
        })}</ul> : <span>Loading.... </span>
    );
}
export default Users;