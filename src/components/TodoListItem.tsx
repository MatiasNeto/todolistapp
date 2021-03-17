import React from "react";
import { TodoModel } from "../models/Todo-model";

interface TodoListItemProps {
    todo: TodoModel;
}

const onRemove = (todo: TodoModel) => {
    console.log(todo);

}

const handleChange = (event: any) => {
    console.log("Mudar " + event.target.id);
}

const TodoListItem = (props: TodoListItemProps) => {
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
                <i className="far fa-edit p-1"></i>
                <i className="far fa-trash-alt p-1" onClick={() => onRemove(props.todo)}></i>
            </td>
        </tr >
    );
}

export default TodoListItem;