import React from 'react';
import { TodoModel } from '../models/Todo-model';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    const todos: TodoModel[] = [
        { id: 1, title: "Lear React", done: true },
        { id: 2, title: "Learn React Native", done: false },
    ];
    return (
        <div className="container mt-3">
            <div className="card">
                <h5 className="card-header">Task List</h5>
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos?.map(
                                todo => (<TodoListItem key={todo.id} todo={todo}></TodoListItem>)
                            )}
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-primary">Add Task</button>
                </div>
            </div>
        </div>
    );
}

export default TodoList;