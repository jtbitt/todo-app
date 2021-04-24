interface IDataTableProps {
  data: any;
}

export const DataTable = ({ data }: IDataTableProps) => {
  return (
    <table
      style={{
        width: "100%",
        marginTop: "20px",
        marginBottom: "20px",
        border: "1px solid lightgray",
      }}
    >
      <thead>
        <tr style={{ textAlign: "left" }}>
          <th
            style={{
              width: "5%",
              padding: "20px 10px",
              borderBottom: "1px solid lightgray",
            }}
          >
            #
          </th>
          <th style={{ width: "80%", borderBottom: "1px solid lightgray" }}>
            Title
          </th>
          <th
            style={{
              width: "10%",
              borderBottom: "1px solid lightgray",
              paddingRight: "10px",
            }}
          >
            Completed
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((data: any) => (
          <tr key={data.id}>
            <td
              style={{
                padding: "20px 10px",
                borderBottom: "1px solid lightgray",
              }}
            >
              {data.id}
            </td>
            <td style={{ borderBottom: "1px solid lightgray" }}>
              {data.title}
            </td>
            <td style={{ borderBottom: "1px solid lightgray" }}>
              {data.completed.toString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
