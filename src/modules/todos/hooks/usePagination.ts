import { useState } from "react";

import { paginateTodos } from "../utils";
import { ITodo } from "../interfaces/todo.interface";

export const usePagination = (data: ITodo[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    if (currentPage < maxPage) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  }

  const prev = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  }

  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    const newData = paginateTodos(data, begin, end);
    setPaginatedData(newData);
  }

  return { next, prev, currentData, setCurrentPage, setCurrentIndex, paginatedData, currentIndex, currentPage, maxPage };

};
