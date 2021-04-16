import { useState, useEffect } from "react";

export const Todos = () => {
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();

        setTodos(data);
      } catch (e) {
        setError(e.message || "Something went wrong");
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <ul>
      {todos.map(({ title, id }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};
