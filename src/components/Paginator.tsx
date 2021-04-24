interface IPaginatorProps {
  index: number;
  maxIndex: number;
  pageRange: number;
  pageTotal: number;
  total: number;
  onClick: (direction: string) => void;
}

export const Paginator = ({
  index,
  maxIndex,
  pageRange,
  pageTotal,
  total,
  onClick,
}: IPaginatorProps) => {
  const onPaginationPress = (e: any, direction: string) => {
    onClick(direction);
  };

  return (
    <div style={{ display: "flex", marginBottom: "20px" }}>
      <span style={{ marginLeft: "auto", marginRight: "10px" }}>
        {pageRange}-{pageTotal} of {total}
      </span>
      <button
        disabled={index === 0}
        onClick={(e) => onPaginationPress(e, "previous")}
        style={{ marginRight: "10px" }}
      >
        &larr;
      </button>
      <button
        disabled={index === maxIndex}
        onClick={(e) => onPaginationPress(e, "next")}
      >
        &rarr;
      </button>
    </div>
  );
};
