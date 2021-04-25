import { usePagination } from "../hooks";

interface IPaginatorProps {
  data: any;
  pageSize: number;
}

export const Paginator = ({ data, pageSize }: IPaginatorProps) => {
  // const { next, prev, jump, currentPage, maxPage, currentData } = usePagination(
  //   data,
  //   pageSize
  // );

  const onPaginationPress = (e: any, direction: string) => {
    // onClick(direction);
  };

  return (
    <div style={{ display: "flex", marginBottom: "20px" }}>
      <span style={{ marginLeft: "auto", marginRight: "10px" }}>
        {/* {currentPage}-{pageTotal} of {total} */}
        20-20 of 5000
      </span>
      <button
        onClick={(e) => onPaginationPress(e, "previous")}
        style={{ marginRight: "10px" }}
      >
        &larr;
      </button>
      <button onClick={(e) => onPaginationPress(e, "next")}>&rarr;</button>
    </div>
  );
};
