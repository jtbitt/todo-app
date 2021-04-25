import {Todo} from '../interfaces/todo.interface';

export const filterTodos = (todos: Todo[], query: any) => {
  const filteredTodos = [...todos].filter(todo => todo['completed'] === query);
  return filteredTodos.length ? filteredTodos : todos;
}
