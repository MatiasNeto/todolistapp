import { TodoModel } from "../models/Todo-model";

export interface TodoContextType {
    todos: TodoModel[];

    addTodo(title: string, done: boolean): void;
    removeTodo(todo: TodoModel): void;
    toggle(todo: TodoModel): void;
    editTodo(todo: TodoModel): void;
}