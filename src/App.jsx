import useFetch from "./hooks/useFetch";

const App = () => {
  const { loading, error, title } = useFetch();
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div>
      <h1>Data Fetching Example</h1>
      <p>{title}</p>
    </div>
  );
};

export default App;
