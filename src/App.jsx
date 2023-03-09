import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyle } from "./GlobalStyle.js";

import Router from "./router/Router";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />

      <Router />
    </QueryClientProvider>
  );
};

export default App;
