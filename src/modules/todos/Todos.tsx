import { useState } from "react";

import { useFetch } from "./useFetch";
import { useTodos } from "./useTodos";
import { Todo } from "./interfaces/todo.interface";

export const Todos = () => {
  const [currentPagination, setCurrentPagination] = useState(0);
  const [searchQuery, setSearchQuery] = useState({
    query: "",
    type: "search",
  });
  const { error, isLoading, data } = useFetch(
    `https://jsonplaceholder.typicode.com/todos`
  );
  const { todos, totalTodos } = useTodos(
    data,
    searchQuery.query,
    searchQuery.type
  );

  if (error) {
    return <h3>{error}</h3>;
  }

  if (isLoading || !todos || !todos.length) {
    return <h3>loading...</h3>;
  }

  const handleSearchChange = (e: any) => {
    setSearchQuery({ query: e.target.value, type: "search" });
  };

  const handleFilterChange = (e: any) => {
    setSearchQuery({ query: e.target.value, type: "filter" });
  };

  const handlePagination = (e: any, direction: string) => {
    direction === "previous"
      ? setCurrentPagination(currentPagination - 1)
      : setCurrentPagination(currentPagination + 1);
  };

  return (
    <div style={{ marginLeft: "5%", marginRight: "5%" }}>
      <h3>Todos</h3>
      <div style={{ display: "flex" }}>
        <input
          placeholder="Search todos..."
          onChange={handleSearchChange}
          style={{ padding: "10px", width: "48%", marginRight: "auto" }}
        />
        <select
          onChange={handleFilterChange}
          style={{ padding: "10px", width: "48%" }}
        >
          <option></option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
      <table
        style={{
          width: "100%",
          marginTop: "20px",
          marginBottom: "20px",
          border: "1px solid lightgray",
        }}
      >
        <thead>
          <tr style={{ textAlign: "left" }}>
            <th
              style={{
                width: "5%",
                padding: "20px 10px",
                borderBottom: "1px solid lightgray",
              }}
            >
              #
            </th>
            <th style={{ width: "80%", borderBottom: "1px solid lightgray" }}>
              Title
            </th>
            <th
              style={{
                width: "10%",
                borderBottom: "1px solid lightgray",
                paddingRight: "10px",
              }}
            >
              Completed
            </th>
          </tr>
        </thead>
        <tbody>
          {todos[currentPagination].map((todo: Todo) => (
            <tr key={todo.id}>
              <td
                style={{
                  padding: "20px 10px",
                  borderBottom: "1px solid lightgray",
                }}
              >
                {todo.id}
              </td>
              <td style={{ borderBottom: "1px solid lightgray" }}>
                {todo.title}
              </td>
              <td style={{ borderBottom: "1px solid lightgray" }}>
                {todo.completed.toString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: "flex" }}>
        <span style={{ marginLeft: "auto", marginRight: "10px" }}>
          1-20 of {totalTodos}
        </span>
        <button
          disabled={currentPagination === 0}
          onClick={(e) => handlePagination(e, "previous")}
          style={{ marginRight: "10px" }}
        >
          &larr;
        </button>
        <button
          disabled={currentPagination === todos.length - 1}
          onClick={(e) => handlePagination(e, "next")}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};
