import { useReducer, useEffect } from "react";

import { Todo } from "./interfaces/todo.interface";
import { filterTodos } from "./utils/filterTodos";

const ACTIONS = {
  filterTodos: "FILTER_TODOS",
  searchTodos: "SEARCH_TODOS"
};

const createInitialState = () => ({
  searchedTodos: [],
  filteredTodos: []
});

const todosReducer = (state: any, action: { type: string; payload: any; }) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.searchTodos:
      return { ...state, isLoading: true, error: undefined };
    case ACTIONS.filterTodos:
      return { ...state, ...payload, isLoading: false };
    default:
      throw new Error("Not recognized action type in todosReducer! Typo?");
  }
};

export const useTodos = (todos: Todo[], query: string, type: string) => {
  const [state, dispatch] = useReducer(
    todosReducer,
    createInitialState()
  );

  useEffect(() => {
    switch (type) {
      case 'filter':
        const filteredTodos = filterTodos(todos, query);
        return dispatch({
          type: ACTIONS.filterTodos,
          payload: { filteredTodos: filteredTodos }
        });
      // case ACTIONS.filterTodos:
      //   return { ...state, ...payload, isLoading: false };
      default:
        throw new Error("Not recognized action type in todosReducer! Typo?");
    }
  }, []);
  
  return state;
};
