import { useState } from "react";

import { useFetch } from "./useFetch";
import { useTodos } from "./useTodos";
import { Todo } from "./interfaces/todo.interface";

export const Todos = () => {
  const [searchQuery, setSearchQuery] = useState({
    query: "",
    type: "",
  });
  const { error, isLoading, data } = useFetch(
    `https://jsonplaceholder.typicode.com/todos`
  );
  const { todos } = useTodos(data, searchQuery.query, searchQuery.type);

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading || !todos) {
    return <div>loading...</div>;
  }

  const handleSearchChange = (e: any) => {
    setSearchQuery({ query: e.target.value, type: "search" });
  };

  const handleFilterChange = (e: any) => {
    setSearchQuery({ query: e.target.value, type: "filter" });
  };

  return (
    <>
      <h3>Todos</h3>
      <input
        value={searchQuery.query}
        placeholder="Search todos..."
        onChange={handleSearchChange}
      />
      <select onChange={handleFilterChange}>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo: Todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
