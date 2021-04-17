import {Todo} from '../interfaces/todo.interface';

export const filterTodos = (todos: Todo[], query: boolean) => todos.filter(todo => todo['completed'] === query);
