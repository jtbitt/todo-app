import { DataTable, Paginator, Filter } from "../components";
import { useTodos } from "../hooks";

export const Todos = () => {
  const {
    isError,
    isLoading,
    todos,
    filteredTodos,
    paginatedTodos,
    setFilteredTodos,
    setPaginatedTodos,
  } = useTodos();

  if (isError) {
    return <h3>There is an error</h3>;
  }

  if (isLoading) {
    return <h3>loading...</h3>;
  }

  return (
    <div style={styles.container}>
      <h3>Todos</h3>
      <Filter data={todos} onFilter={setFilteredTodos} />
      <DataTable data={paginatedTodos} />
      <Paginator
        data={filteredTodos}
        pageSize={20}
        onPageChange={setPaginatedTodos}
      />
    </div>
  );
};

export const styles = {
  container: {
    margin: "0 5%",
  },
};
