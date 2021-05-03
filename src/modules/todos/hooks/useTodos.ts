import { useReducer, useEffect } from "react";

import { useFetch } from "../../../api";
import { ITodo } from "../interfaces/todo.interface";

type TAction =
  | { type: "TODOS_LOADING" }
  | { type: "RETURN_TODOS"; payload: ITodo[] }
  | { type: "PAGINATE_TODOS"; payload: ITodo[] }
  | { type: "FILTER_TODOS"; payload: ITodo[] }
  | { type: "TODOS_ERROR"; }

export interface TodosState {
  isError: boolean;
  isLoading: boolean;
  todos: ITodo[];
  filteredTodos: ITodo[];
  paginatedTodos: ITodo[];
};

const initialState = {
  isError: false,
  isLoading: true,
  todos: [],
  filteredTodos: [],
  paginatedTodos: []
};

const todosReducer = (state: TodosState, action: TAction): TodosState => {
  switch (action.type) {
    case "TODOS_LOADING":
      return { ...state, isLoading: true, isError: false };
    case "RETURN_TODOS":
      return { ...state, isLoading: false, todos: action.payload };
    case "PAGINATE_TODOS":
      return { ...state, isLoading: false, paginatedTodos: action.payload };
    case "FILTER_TODOS":
      return { ...state, isLoading: false, filteredTodos: action.payload };
    case "TODOS_ERROR":
      return { ...state, isError: true }
    default:
      throw new Error("Not recognized action type in todosReducer! Typo?");
  }
};

export const useTodos = () => {
  const [state, dispatch] = useReducer(
    todosReducer,
    initialState
  );
  const { isError, isLoading, data } = useFetch<ITodo[]>(
    `https://jsonplaceholder.typicode.com/todos`
  );

  const setFilteredTodos = (todos: ITodo[]) => {
    return dispatch({ type: "FILTER_TODOS", payload: todos });
  }

  const setPaginatedTodos = (todos: ITodo[]) => {
    return dispatch({ type: "PAGINATE_TODOS", payload: todos });
  }

  useEffect(() => {
    if (isError) {
      return dispatch({ type: "TODOS_ERROR" });
    }
  
    if (isLoading) {
      return dispatch({ type: "TODOS_LOADING" });
    }
    
    if (data) {
      return dispatch({ type: "RETURN_TODOS", payload: data });
    }
  }, [isError, isLoading, data]);
  
  return { ...state, setFilteredTodos, setPaginatedTodos };
};
