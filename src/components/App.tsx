import TodoContext from '../contexts/TodoContext';
import Navbar from './Navbar';
import TodoList from './TodoList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <TodoContext>
            <div>
                <Navbar></Navbar>
                <TodoList></TodoList>
            </div>
        </TodoContext>
    );
}

export default App;