import TodoContext from '../contexts/TodoContext';
import Navbar from './Navbar';
import TodoList from './TodoList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import AddTodo from './AddTodo';
import HomeApp from './HomeApp';

const App = () => {
    return (
        <TodoContext>
            <Router>
                <Navbar></Navbar>
                <Switch>
                    <Route path="/addTodo">
                        <AddTodo></AddTodo>
                    </Route>
                    <Route path="/listTodo">
                        <TodoList></TodoList>
                    </Route>
                    <Route path="/">
                        <HomeApp></HomeApp>
                    </Route>
                </Switch>
            </Router>
        </TodoContext>
    );
}

export default App;