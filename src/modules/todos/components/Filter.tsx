import { useEffect } from "react";

import { useFilters } from "../hooks";

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
    <div style={styles.container}>
      <input
        placeholder="Search todos..."
        onChange={setQuery}
        style={styles.search}
      />
      <select onChange={setFilter} style={styles.filter}>
        <option></option>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
    </div>
  );
};

export const styles = {
  container: {
    display: "flex",
  },
  search: {
    padding: "10px",
    width: "48%",
    marginRight: "auto",
  },
  filter: {
    padding: "10px",
    width: "48%",
  },
};
