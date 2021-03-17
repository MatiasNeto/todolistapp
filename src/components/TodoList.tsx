import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContextType';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    const { todos } = useContext<TodoContextType>(TodoContext);
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