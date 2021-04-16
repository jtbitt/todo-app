import {Todo} from '../interfaces/todo.interface';

export const searchTodos = (todos: Todo[], query: string) => [...todos].filter(todo => todo['title'].includes(query));
