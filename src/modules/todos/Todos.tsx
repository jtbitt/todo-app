import { useFetch } from "./useFetch";

export interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

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

  const todos: Todos[] = data;

  return (
    <>
      <h3>Todos</h3>
      <input />
      <select></select>
      <table>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
        {todos.map(({ title, id, completed }) => (
          <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{completed.toString()}</td>
          </tr>
        ))}
      </table>
    </>
  );
};
