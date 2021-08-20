import './App.scss';
import {Container} from 'react-bootstrap';
import UsersFetch from "./UsersFetch";
import TodosAxios from "./TodosAxios";

function App() {
    return (
        <div className="App">
            <Container>
                <UsersFetch/>
                <TodosAxios/>
            </Container>
        </div>
    );
}

export default App;
