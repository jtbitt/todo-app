import { useEffect } from "react";

import { useFilters } from "../hooks";
import { ITodo } from "../interfaces/todo.interface";
import "../css/Todos.css";

interface IFilterProps {
  data: ITodo[];
  onFilter: (todos: ITodo[]) => void;
}

export const Filter = ({ data, onFilter }: IFilterProps) => {
  const { setQuery, setFilter, filteredTodos } = useFilters(data);

  useEffect(() => {
    onFilter(filteredTodos);
  }, [onFilter, filteredTodos]);

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
