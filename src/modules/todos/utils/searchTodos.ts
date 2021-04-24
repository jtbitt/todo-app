import {Todo} from '../interfaces/todo.interface';

export const searchTodos = (todos: Todo[], query: string) => {
  return [...todos].filter(todo => todo['title'].toLowerCase().includes(query.toLowerCase()));
};
