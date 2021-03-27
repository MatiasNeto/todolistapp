import { TodoModel } from '../models/Todo-model';

const TODO_STORE = 'todos';
const ID_TASK = 'idTask';

export const get = (): TodoModel[] => {
    const data = localStorage.getItem(TODO_STORE) || '';

    try {
        const result = JSON.parse(data) as TodoModel[];
        return result;
    } catch {
        return [];
    }
}

export const getLastId = (): number => {
    const data = localStorage.getItem(ID_TASK) || '';

    try {
        const result = JSON.parse(data) as number;
        return result;
    } catch {
        return 1;
    }
}

export const save = (data: TodoModel[]) => {
    if (data.length >= 1)
        localStorage.setItem(TODO_STORE, JSON.stringify(data));

}

export const setNewId = (idTask: number) => {
    localStorage.setItem(ID_TASK, JSON.stringify(idTask));
}