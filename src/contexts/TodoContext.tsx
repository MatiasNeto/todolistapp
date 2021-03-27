import React, { createContext, useEffect, useState } from "react";
import { TodoModel } from "../models/Todo-model";
import { get, getLastId, save, setNewId } from "../Services/TodoService";
import { TodoContextType } from "./TodoContextType";

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    idTask: 0,
    addTodo: () => { },
    removeTodo: () => { },
    toggle: () => { },
    editTodo: () => { }
});

const TodoProvider = (props: any) => {
    const [todos, setTodos] = useState<TodoModel[]>(get);
    const [idTask, setIdTask] = useState<number>(getLastId);

    useEffect(() => {
        save(todos);
        setNewId(idTask)
    }, [todos, idTask])

    const addTodo = (title: string, doneStatus: boolean) => {
        const todo: TodoModel = { id: idTask, title: title, done: doneStatus }
        setTodos([...todos, todo]);
        setIdTask(idTask + 1)
    };

    const removeTodo = (todo: TodoModel) => {
        const index = todos.indexOf(todo);
        setTodos(todos.filter((_, i) => i !== index));
    };

    const toggle = (todo: TodoModel) => {
        const index = todos.indexOf(todo);
        todos[index].done = !todo.done;
        setTodos([...todos]);
    };

    const editTodo = (todo: TodoModel) => {
        console.log(todo)
    }

    return (
        <TodoContext.Provider value={{ todos, idTask, addTodo, removeTodo, toggle, editTodo }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;