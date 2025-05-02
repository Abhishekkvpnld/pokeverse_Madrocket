import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";
import LoadingComponents from "./components/LoadingComponent";



const HomePage = lazy(() => import("./pages/HomePage"));
const PokemonList = lazy(() => import("./pages/PokemonList"));
const NotFound = lazy(() => import("./components/PageNotFound"))
const Compare = lazy(() => import("./pages/Compare"))
const PokemonDetail = lazy(() => import("./pages/PokemonDetail"))
const Favorite = lazy(() => import("./pages/Favorite"))


const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingComponents />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<PokemonList />} />
          <Route path="/details/:name" element={<PokemonDetail />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster position="bottom-right" />
      </Suspense>
    </Router>
  );
};

export default App;
