import { useReducer, useEffect } from "react";

import { Todo } from "../interfaces/todo.interface";
import { chunkTodos, filterTodos, searchTodos } from "../utils";

const ACTIONS = {
  filterTodos: "FILTER_TODOS",
  searchTodos: "SEARCH_TODOS",
  returnTodos: "RETURN_TODOS"
};

export interface TodosState {
  todos: Todo[];
  totalTodos: number;
};

const createInitialState = () => ({
  todos: [],
  totalTodos: 0
});

const todosReducer = (state: any, action: { type: string; payload: any; }) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.searchTodos:
      return { ...state, ...payload };
    case ACTIONS.filterTodos:
      return { ...state, ...payload };
    case ACTIONS.returnTodos:
      return { ...state, ...payload };
    default:
      throw new Error("Not recognized action type in todosReducer! Typo?");
  }
};

export const useTodos = (todos: Todo[], query: any, type: string) => {
  const [state, dispatch] = useReducer(
    todosReducer,
    createInitialState()
  );

  useEffect(() => {
    if (!todos) {
      return;
    }

    switch (type) {
      case "search":
        const searchedTodos = searchTodos(todos, query);

        return dispatch({
          type: ACTIONS.searchTodos,
          payload: { todos: chunkTodos(searchedTodos), totalTodos: searchedTodos.length }
        });

      case "filter":
        const cleanQuery = query === "true" ? true : false;
        const filteredTodos = filterTodos(todos, cleanQuery);

        return dispatch({
          type: ACTIONS.filterTodos,
          payload: { todos: chunkTodos(filteredTodos), totalTodos: filteredTodos.length }
        });

      default:
        return dispatch({
          type: ACTIONS.returnTodos,
          payload: { todos: chunkTodos(todos) }
        })
      }
  }, [todos, query, type]);
  
  return state;
};
