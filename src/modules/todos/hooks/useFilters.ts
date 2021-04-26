import {useState} from 'react';

import {searchTodos, filterTodos} from "../utils";

export const useFilters = (data: any) => {
  const [currentQuery, setCurrentQuery] = useState("");
  const [currentFilter, setCurrentFilter] = useState<boolean>();
  const [filteredTodos, setFilteredTodos] = useState(data);

  const setQuery = (e: any) => {
    const filteredTodos = filterTodos(data, currentFilter);
    const currentTodos = searchTodos(filteredTodos, e.target.value);
    setCurrentQuery(e.target.value);
    setFilteredTodos(currentTodos);
  };

  const setFilter = (e: any) => {
    const searchedTodos = searchTodos(data, currentQuery);
    const currentTodos = filterTodos(searchedTodos, e.target.value);
    setCurrentFilter(e.target.value);
    setFilteredTodos(currentTodos);
  };

  return { setQuery, setFilter, filteredTodos };
}
