import { useEffect } from "react";

import { usePagination } from "../hooks";

interface IPaginatorProps {
  data: any;
  pageSize: number;
  onPageChange: ({}: any) => void;
}

export const Paginator = ({
  data,
  pageSize,
  onPageChange,
}: IPaginatorProps) => {
  const {
    next,
    prev,
    jump,
    currentData,
    paginatedData,
    currentIndex,
    currentPage,
    maxPage,
  } = usePagination(data, pageSize);

  const handlePagination = (e: any, direction: string) => {
    direction === "prev" ? prev() : next();
  };

  useEffect(() => {
    const newData = currentData();
    onPageChange(newData);
  }, [paginatedData]);

  return (
    <div style={{ display: "flex", marginBottom: "20px" }}>
      <span style={{ marginLeft: "auto", marginRight: "10px" }}>
        {currentIndex}-{currentIndex + paginatedData.length - 1} of{" "}
        {data.length}
      </span>
      <button
        disabled={currentIndex === 1}
        onClick={(e) => handlePagination(e, "prev")}
        style={{ marginRight: "10px" }}
      >
        &larr;
      </button>
      <button onClick={(e) => handlePagination(e, "next")}>&rarr;</button>
    </div>
  );
};
