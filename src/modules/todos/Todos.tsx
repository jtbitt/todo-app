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
    <ul>
      {todos.map(({ title, id }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};
