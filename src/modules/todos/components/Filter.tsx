import { useEffect } from "react";

import { useFilters } from "../hooks";
import { Todo } from "../interfaces/todo.interface";
import "../css/Todos.css";

interface IFilterProps {
  data: Todo[];
  onFilter: (todos: Todo[]) => void;
}

export const Filter = ({ data, onFilter }: IFilterProps) => {
  const { setQuery, setFilter, filteredTodos } = useFilters(data);

  useEffect(() => {
    onFilter(filteredTodos);
  }, [filteredTodos]);

  return (
    <div className="filter-container">
      <input
        placeholder="Search todos..."
        onChange={setQuery}
        className="search"
      />
      <select onChange={setFilter} className="filter">
        <option value="all">All</option>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
    </div>
  );
};
