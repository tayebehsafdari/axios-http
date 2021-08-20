import React, {useEffect, useState} from "react";
import axios from 'axios';

function TodosAxios(props) {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        /* axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => setTodos(response.data))
            .catch(error => setError(error))
            .then(() => console.log("log")); */

        async function getTodos() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
                setTodos(response.data);
                console.log(response);
            } catch (error) {
                setError(error);
            }
        }

        getTodos();
    }, []);
    if (error) {
        return <h1>{error.message}</h1>;
    } else {
        return (
            <div className="my-5">
                <h1>Listing all resources</h1>
                <br/>
                <table className="table table-striped table-success table-hover">
                    <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">title</th>
                        <th scope="col">completed</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(todo => (
                            <tr key={todo.id}>
                                <th scope="row">{todo.id}</th>
                                <td>{todo.title}</td>
                                <td>{todo.completed}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodosAxios;