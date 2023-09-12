import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Authors from "./ApiComponents/Authors/Authors";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Authors />
    </QueryClientProvider>
  );
}

export default App;
