import './App.css';
import MenuPizza from './components/MenuPizza';
import IngredientList from './components/IngredientList';


function App() {
  return (
    <div className="App">
      <h1>Pizza Menu</h1>
      <MenuPizza />
      <IngredientList />

    </div>
  );
}

export default App;
