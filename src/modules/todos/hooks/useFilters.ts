import React, { useState, SyntheticEvent } from 'react';

import { searchTodos, filterTodos } from "../utils";
import { ITodo } from "../interfaces/todo.interface";

export const useFilters = (data: ITodo[]) => {
  const [currentQuery, setCurrentQuery] = useState("");
  const [currentFilter, setCurrentFilter] = useState("");
  const [filteredTodos, setFilteredTodos] = useState(data);

  const setQuery = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement
    const filteredTodos = filterTodos(data, currentFilter);
    const currentTodos = searchTodos(filteredTodos, target.value);
    setCurrentQuery(target.value);
    setFilteredTodos(currentTodos);
  };

  const setFilter = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const searchedTodos = searchTodos(data, currentQuery);
    const currentTodos = filterTodos(searchedTodos, target.value);
    setCurrentFilter(target.value);
    setFilteredTodos(currentTodos);
  };

  return { setQuery, setFilter, filteredTodos };
}
