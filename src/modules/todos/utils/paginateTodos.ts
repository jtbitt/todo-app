import {ITodo} from '../interfaces/todo.interface';

export const paginateTodos = (todos: ITodo[], begin: number, end: number) => [...todos].slice(begin, end);
