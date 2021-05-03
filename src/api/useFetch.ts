import { useReducer, useEffect } from "react";

export interface FetchState<T> {
  isError?: boolean;
  isLoading: boolean;
  data?: T;
};

type TAction<T> =
  | { type: "FETCH_PENDING" }
  | { type: "FETCH_SUCCESS"; payload: T }
  | { type: "FETCH_ERROR"; }

export const useFetch = <T>(endpoint: RequestInfo, config: RequestInit = {}) => {
  const initialState: FetchState<T> = {
    isError: false,
    isLoading: true,
    data: undefined
  };

  const fetchReducer = (state: FetchState<T>, action: TAction<T>): FetchState<T> => {
    switch (action.type) {
      case "FETCH_PENDING":
        return { ...state, isLoading: true, isError: false };
      case "FETCH_SUCCESS":
        return { ...state, isLoading: false, data: action.payload };
      case "FETCH_ERROR":
        return { ...state, isLoading: false, isError: true };
      default:
        throw new Error("Not recognized action type in fetchReducer! Typo?");
    }
  };
  
  const [state, dispatch] = useReducer(
    fetchReducer,
    initialState
  );

  useEffect(() => {
    if (!endpoint) {
      throw new Error("Please, provide an endpoint in order to use this hook!");
    }

    const fetchData = async () => {
      dispatch({ type: "FETCH_PENDING" });

      try {
        const response = await fetch(endpoint, config);

        if (!response.ok) {
          dispatch({ type: "FETCH_ERROR" });
          throw new Error(response.statusText);
        }

        const data = await response.json();

        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (e) {
        dispatch({ type: "FETCH_ERROR" });
        throw new Error(e.message);
      }
    };

    fetchData();
  }, []);
  
  return state;
};
