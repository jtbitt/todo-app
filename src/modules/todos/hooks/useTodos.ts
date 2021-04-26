import { useReducer, useEffect } from "react";

import { useFetch } from "../../../api";
import { Todo } from "../interfaces/todo.interface";

const ACTIONS = {
  returnTodos: "RETURN_TODOS",
  updateTodos: "UPDATE_TODOS",
  todosLoading: "TODOS_LOADING",
  todosError: "TODOS_ERROR"
};

export interface TodosState {
  error: string;
  isLoading: boolean;
  todos: Todo[];
  filteredTodos: Todo[];
  paginatedTodos: Todo[];
};

const createInitialState = () => ({
  error: undefined,
  isLoading: true,
  todos: [],
  filteredTodos: [],
  paginatedTodos: []
});

const todosReducer = (state: any, action: { type: string; payload: any; }) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.returnTodos:
      return { ...state, ...payload };
    case ACTIONS.updateTodos:
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

  const setFilteredTodos = (todos: Todo[]) => {
    return dispatch({
      type: ACTIONS.updateTodos,
      payload: { filteredTodos: todos }
    });
  }

  const setPaginatedTodos = (todos: Todo[]) => {
    return dispatch({
      type: ACTIONS.updateTodos,
      payload: { paginatedTodos: todos }
    });
  }

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
      payload: { todos: data, filteredTodos: data, isLoading: false }
    });
  }, [data]);
  
  return { ...state, setFilteredTodos, setPaginatedTodos };
};
