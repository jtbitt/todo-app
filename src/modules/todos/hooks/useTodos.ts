import { useReducer, useEffect } from "react";

import { useFetch, usePagination } from "../../../hooks";
import { Todo } from "../interfaces/todo.interface";
import { chunkTodos, filterTodos, searchTodos } from "../utils";

const ACTIONS = {
  filterTodos: "FILTER_TODOS",
  searchTodos: "SEARCH_TODOS",
  returnTodos: "RETURN_TODOS",
  todosLoading: "TODOS_LOADING",
  todosError: "TODOS_ERROR"
};

export interface TodosState {
  error: string;
  isLoading: boolean;
  todos: Todo[];
  totalTodos: number;
};

const createInitialState = () => ({
  error: undefined,
  isLoading: true,
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
    case ACTIONS.todosLoading:
      return { ...state, ...payload };
    case ACTIONS.todosError:
      return { ...state, ...payload }
    default:
      throw new Error("Not recognized action type in todosReducer! Typo?");
  }
};

export const useTodos = () => {
  const [state, dispatch] = useReducer(
    todosReducer,
    createInitialState()
  );
  const { error, isLoading, data } = useFetch(
    `https://jsonplaceholder.typicode.com/todos`
  );

  useEffect(() => {
    if (error) {
      return dispatch({
        type: ACTIONS.todosError,
        payload: { error: error }
      });
    }
  
    if (isLoading) {
      return dispatch({
        type: ACTIONS.todosLoading,
        payload: { isLoading: isLoading }
      });
    }

    return dispatch({
      type: ACTIONS.returnTodos,
      payload: { todos: data, isLoading: false }
    });

  }, [error, isLoading, data]);
  
  return state;
};
