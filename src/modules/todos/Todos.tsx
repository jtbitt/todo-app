import { useState } from "react";

import { DataTable, Paginator } from "../../components";
import { useTodos } from "./hooks";
import { Todo } from "./interfaces/todo.interface";

export const Todos = () => {
  const [searchQuery, setSearchQuery] = useState({
    query: "",
    type: "search",
  });
  const { error, isLoading, todos, totalTodos } = useTodos();

  if (error) {
    return <h3>{error}</h3>;
  }

  if (isLoading) {
    return <h3>loading...</h3>;
  }

  const handleSearchChange = (e: any) => {
    setSearchQuery({ query: e.target.value, type: "search" });
  };

  const handleFilterChange = (e: any) => {
    setSearchQuery({ query: e.target.value, type: "filter" });
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
      <DataTable data={todos} />
      <Paginator data={todos} pageSize={20} />
    </div>
  );
};
