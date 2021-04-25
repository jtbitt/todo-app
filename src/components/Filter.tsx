import { useEffect } from "react";

import { useFilters } from "../modules/todos/hooks";

interface IFilterProps {
  data: any;
  onFilter: ([]: any[]) => void;
}

export const Filter = ({ data, onFilter }: IFilterProps) => {
  const { setQuery, setFilter, filteredTodos } = useFilters(data);

  useEffect(() => {
    onFilter(filteredTodos);
  }, [filteredTodos]);

  return (
    <div style={{ display: "flex" }}>
      <input
        placeholder="Search todos..."
        onChange={setQuery}
        style={{ padding: "10px", width: "48%", marginRight: "auto" }}
      />
      <select onChange={setFilter} style={{ padding: "10px", width: "48%" }}>
        <option></option>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
    </div>
  );
};
