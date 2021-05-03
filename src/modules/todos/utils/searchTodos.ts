import {ITodo} from '../interfaces/todo.interface';

export const searchTodos = (todos: ITodo[], query: string) => {
  return [...todos].filter(todo => todo['title'].toLowerCase().includes(query.toLowerCase()));
};
