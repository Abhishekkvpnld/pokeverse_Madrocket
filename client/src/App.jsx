import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingComponents from "./components/LoadingComponent";


const HomePage = lazy(() => import("./pages/HomePage"));
const PokemonList = lazy(() => import("./pages/PokemonList"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingComponents />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<PokemonList />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
