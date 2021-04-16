import { useState, useEffect } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();

      setTodos(data);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {todos.map(({ title, id }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};
