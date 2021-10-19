import { useEffect } from "react";

import { usePagination } from "../hooks";
import { ITodo } from "../interfaces/todo.interface";

interface IPaginatorProps {
  data: ITodo[];
  pageSize: number;
  onPageChange: (todos: ITodo[]) => void;
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
    setCurrentPage,
    setCurrentIndex,
    paginatedData,
    currentIndex,
    currentPage,
    maxPage,
  } = usePagination(data, pageSize);

  useEffect(() => {
    currentData();
    setCurrentPage(1);
    setCurrentIndex(1);
  }, [data, currentData, setCurrentIndex, setCurrentPage]);

  useEffect(() => {
    currentData();
  }, [currentPage, currentData]);

  useEffect(() => {
    onPageChange(paginatedData);
  }, [paginatedData, onPageChange]);

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
