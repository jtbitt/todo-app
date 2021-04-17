import {Todo} from '../interfaces/todo.interface';

export const filterTodos = (todos: Todo[], query: string) => todos.filter(todo => todo['title'].includes(query));
