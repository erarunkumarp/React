import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState(null)
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                setUsers(persons);
            })
            .catch((e) => {
                console.error("Error occured in the API call", e);
                setIsError(true);
            })
            .finally();
    }

    return (
        !isError ? (users ? <ul> {users.map(user => {
            return <li>{user.name}</li>
        })}</ul> : <span>Loading.... </span>) :
            <span> Error in fetching users data!</span>
    );
}
export default Users;