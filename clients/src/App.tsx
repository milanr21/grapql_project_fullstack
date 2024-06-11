import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";

const client = new ApolloClient({
  uri:
    import.meta.env.NODE_ENV === "development"
      ? "http://localhost:5000/graphql"
      : "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="*" element={<NotFound />} />

            <Route path="/projects/:id" element={<Project />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
