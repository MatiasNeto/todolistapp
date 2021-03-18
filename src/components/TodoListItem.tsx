import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoContextType } from "../contexts/TodoContextType";
import { TodoModel } from "../models/Todo-model";

interface TodoListItemProps {
    todo: TodoModel;
}


const TodoListItem = (props: TodoListItemProps) => {

    const onRemove = (todo: TodoModel) => {
        removeTodo(todo);
    }

    const handleChange = (event: any) => {
        toggle(props.todo);
    }

    const onEdit = (todo: TodoModel) => {
        editTodo(props.todo)
    }
    const { removeTodo, toggle, editTodo } = useContext<TodoContextType>(TodoContext);
    return (
        <tr>
            <td>
                <input className="form-check-input"
                    type="checkbox"
                    value=""
                    checked={props.todo.done}
                    onChange={handleChange} />
            </td>
            <td>
                {props.todo.id}
            </td>
            <td>
                {props.todo.title}
            </td>
            <td>
                {props.todo.done}
            </td>
            <td>
                <i className="far fa-edit p-1" onClick={() => onEdit(props.todo)}></i>
                <i className="far fa-trash-alt p-1" onClick={() => onRemove(props.todo)}></i>
            </td>
        </tr >
    );
}

export default TodoListItem;