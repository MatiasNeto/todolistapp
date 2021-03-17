import { TodoModel } from '../models/Todo-model';

const TODO_STORE = 'todos';

export const get = (): TodoModel[] => {
    const data = localStorage.getItem(TODO_STORE) || '';

    try {
        const result = JSON.parse(data) as TodoModel[];
        return result;
    } catch {
        return [];
    }
}

export const save = (data: TodoModel[]) => {
    if (data.length >= 1)
        localStorage.setItem(TODO_STORE, JSON.stringify(data));
}