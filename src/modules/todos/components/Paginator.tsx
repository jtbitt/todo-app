import { useEffect } from "react";

import { usePagination } from "../hooks";
import { Todo } from "../interfaces/todo.interface";

interface IPaginatorProps {
  data: Todo[];
  pageSize: number;
  onPageChange: (todos: Todo[]) => void;
}

export const Paginator = ({
  data,
  pageSize,
  onPageChange,
}: IPaginatorProps) => {
  const {
    next,
    prev,
    currentData,
    paginatedData,
    currentIndex,
    currentPage,
    maxPage,
  } = usePagination(data, pageSize);
  const mq = window.innerWidth;
  console.log(mq);

  useEffect(() => {
    currentData();
  }, [data]);

  useEffect(() => {
    onPageChange(paginatedData);
  }, [paginatedData]);

  return (
    <div style={styles.container}>
      <span style={styles.pages}>
        {paginatedData.length ? currentIndex : 0}-
        {currentIndex + paginatedData.length - 1} of {data.length}
      </span>
      <button
        disabled={currentIndex === 1}
        onClick={(e) => prev()}
        style={styles.prev}
      >
        &larr;
      </button>
      <button disabled={currentPage === maxPage} onClick={(e) => next()}>
        &rarr;
      </button>
    </div>
  );
};

export const styles = {
  container: {
    display: "flex",
    marginBottom: "20px",
  },
  pages: {
    marginLeft: "auto",
    marginRight: "10px",
  },
  prev: {
    marginRight: "10px",
  },
};
