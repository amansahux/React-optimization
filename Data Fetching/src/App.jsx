import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fetchProducts } from "./products/api/api";
import ProductList from "./products/ui/pages/ProductList";

const queryClient = new QueryClient();

function App() {
  fetchProducts()
  return (
    <QueryClientProvider client={queryClient}>
      <ProductList />
    </QueryClientProvider>
  );
}

export default App;