import { useReducer, useEffect } from "react";

const ACTIONS = {
  filterTodos: "FILTER_TODOS",
  searchTodos: "SEARCH_TODOS"
};

const createInitialState = () => ({
  searchedTodos: [],
  filteredTodos: []
});

const fetchReducer = (state: any, action: { type: string; payload: any; }) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.searchTodos:
      return { ...state, isLoading: true, error: undefined };
    case ACTIONS.filterTodos:
      return { ...state, ...payload, isLoading: false };
    default:
      throw new Error("Not recognized action type in fetchReducer! Typo?");
  }
};

// types
// 0 = search
// 1 = filter
export const useTodos = (filter: string, type: string) => {
  const [state, dispatch] = useReducer(
    fetchReducer,
    createInitialState()
  );

  useEffect(() => {
    if (type === 'search') {
      // search util function
    } else {
      // filter util function
    }
  }, []);
  
  return state;
};
