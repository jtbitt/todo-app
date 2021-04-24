import { useState } from "react";

import { DataTable, Paginator } from "../../components";
import { useFetch } from "./useFetch";
import { useTodos } from "./hooks";
import { Todo } from "./interfaces/todo.interface";

export const Todos = () => {
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [pageRange, setPageRange] = useState(0);
  const [pageTotal, setPageTotal] = useState(0);
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
  const chunkSize = 20;

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

  const handlePagination = (direction: string) => {
    if (direction === "previous") {
      setPaginationIndex(paginationIndex - 1);
      setPageRange(pageRange - chunkSize);
      setPageTotal(pageRange - todos[paginationIndex].length);
    } else {
      setPaginationIndex(paginationIndex + 1);
      setPageRange(pageRange + chunkSize);
      setPageTotal(pageRange + todos[paginationIndex].length);
    }
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
      <DataTable data={todos} index={paginationIndex} />
      <Paginator
        index={paginationIndex}
        maxIndex={todos.length - 1}
        pageRange={pageRange}
        pageTotal={pageTotal}
        total={totalTodos}
        onClick={handlePagination}
      />
    </div>
  );
};
