import './App.css';
import products from './products';
import Store from './Store';

function App() {

  return (
    <Store products={products} />
  );
}

export default App;
