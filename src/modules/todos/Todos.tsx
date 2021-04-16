import { useFetch } from "./useFetch";
import { Todo } from "./interfaces/todo.interface";

export const Todos = () => {
  const { error, isLoading, data } = useFetch(
    `https://jsonplaceholder.typicode.com/todos`
  );

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  const todos: Todo[] = data;

  return (
    <>
      <h3>Todos</h3>
      <input />
      <select></select>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(({ title, id, completed }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{completed.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
