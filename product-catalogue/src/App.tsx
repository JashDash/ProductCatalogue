import { ProductCard, SearchBar } from './components';
import { SearchScreen } from './screens'

function App() {
  return (
    <div className="App">
      <SearchScreen />
      <SearchBar />
      <ProductCard />
    </div>
  );
}

export default App;
