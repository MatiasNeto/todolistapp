import React, { createContext, useEffect, useState } from "react";
import { TodoModel } from "../models/Todo-model";
import { get, save } from "../Services/TodoService";
import { TodoContextType } from "./TodoContextType";

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => { },
    removeTodo: () => { },
    toggle: () => { }
});

const TodoProvider = (props: any) => {
    const [todos, setTodos] = useState<TodoModel[]>(
        [{ id: 1, title: "Learn React", done: false }]
    );

    useEffect(() => {
        save(todos);
    }, [todos])

    const addTodo = (title: string, done: boolean) => {
        const todo: TodoModel = { id: todos.length + 1, title: title, done: done }
        setTodos([...todos, todo]);
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

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggle }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;