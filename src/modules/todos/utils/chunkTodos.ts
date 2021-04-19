import {Todo} from '../interfaces/todo.interface';

export const chunkTodos = (todos: Todo[]) => {
  if (!todos || !todos.length) { return [[]] }

  const perChunk = 20;

  const result = [...todos].reduce((resultArray: Todo[][], item: Todo, index: number) => { 
    const chunkIndex = Math.floor(index/perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, [])

  return result;
}
