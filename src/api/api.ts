export type TResponseCode = 0 | 1 | 2 | 3 | 4;

type TTodoResult = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export interface ITodoData {
  results: TTodoResult[];
}

export const fetchQuizData = async (): Promise<ITodoData> => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos',
  );
  const data = await response.json();

  return data;
};