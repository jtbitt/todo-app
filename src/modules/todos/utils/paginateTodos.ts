import {Todo} from '../interfaces/todo.interface';

export const paginateTodos = (todos: Todo[], begin: number, end: number) => todos.slice(begin, end);
