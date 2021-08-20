import React, {useEffect, useState} from "react";

function UsersFetch(props) {
    const [users, setUsers] = useState([]);
    /* const users = [
        {
            id: 1,
            name: "Tayebeh Safdari",
            username: "tayebeh_safdari",
            email: "tayebeh_safdari@yahoo.com",
            address: "Tehran",
            phone: "+98 912 228 51 89",
            website: "tayebehsafdari.com",
            company: "-"
        },
        {
            id: 2,
            name: "Sahar Sarmast",
            username: "sahar_sarmast",
            email: "sahar_sarmast@yahoo.com",
            address: "Tehran",
            phone: "+98 912 228 51 89",
            website: "saharsarmast.com",
            company: "-"
        }
    ]; */
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(result => setUsers(result));
    }, []);
    return (
        <div className="my-5">
            <h1>Listing all resources</h1>
            <br/>
            <table className="table table-striped table-success table-hover">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">username</th>
                    <th scope="col">email</th>
                    <th scope="col">phone</th>
                    <th scope="col">website</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user => (
                        <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default UsersFetch;