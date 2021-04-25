import { useState } from "react";

import { DataTable, Paginator, Filter } from "../../components";
import { useTodos, useFilters } from "./hooks";
import { usePagination } from "../../hooks";
import { Todo } from "./interfaces/todo.interface";

export const Todos = () => {
  const {
    error,
    isLoading,
    todos,
    filteredTodos,
    setFilteredTodos,
  } = useTodos();
  // const pagination = usePagination(todos, 20);

  if (error) {
    return <h3>{error}</h3>;
  }

  if (isLoading) {
    return <h3>loading...</h3>;
  }

  return (
    <div style={{ marginLeft: "5%", marginRight: "5%" }}>
      <h3>Todos</h3>
      <Filter data={todos} onFilter={setFilteredTodos} />
      <DataTable data={filteredTodos} />
      <Paginator data={filteredTodos} pageSize={20} />
    </div>
  );
};
