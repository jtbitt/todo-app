import {ITodo} from '../interfaces/todo.interface';

export const filterTodos = (todos: ITodo[], query: any) => {
  const filteredTodos = [...todos].filter(todo => todo['completed'].toString() === query);
  return filteredTodos.length ? filteredTodos : todos;
}
