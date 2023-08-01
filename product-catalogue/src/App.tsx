import { ProductCard, SearchBar } from './components';
import { SearchScreen } from './screens'
import { ProductsScreen } from './screens/ProductsScreen';
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<SearchScreen />} />
        <Route path="products" element={<ProductsScreen />} />
      </Routes>
    </div>
  );
}

export default App;
