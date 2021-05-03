import { ITodo } from "../interfaces/todo.interface";

interface IDataTableProps {
  data: ITodo[];
}

export const DataTable = ({ data }: IDataTableProps) => {
  return (
    <table style={styles.table}>
      <thead>
        <tr style={styles.head}>
          <th style={{ ...styles.number, ...styles.borderBottom }}>#</th>
          <th style={{ ...styles.title, ...styles.borderBottom }}>Title</th>
          <th style={{ ...styles.completed, ...styles.borderBottom }}>
            Completed
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((data: any) => (
          <tr key={data.id}>
            <td style={{ ...styles.number, ...styles.borderBottom }}>
              {data.id}
            </td>
            <td style={styles.borderBottom}>{data.title}</td>
            <td style={styles.borderBottom}>{data.completed.toString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const styles = {
  table: {
    width: "100%",
    marginTop: "20px",
    marginBottom: "20px",
    border: "1px solid lightgray",
  },
  head: {
    textAlign: "left" as const,
  },
  borderBottom: {
    borderBottom: "1px solid lightgray",
  },
  number: {
    width: "5%",
    padding: "20px 10px",
  },
  title: {
    width: "80%",
  },
  completed: {
    width: "10%",
    paddingRight: "10px",
  },
};
