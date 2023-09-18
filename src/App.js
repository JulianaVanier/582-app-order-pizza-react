import './App.css';
import MenuPizza from './components/MenuPizza';
import IngredientList from './components/IngredientList';
import HeaderApp from './components/HeaderApp';


function App() {
  return (
    <div className="App">
      <HeaderApp />
      <MenuPizza />
      <IngredientList />

    </div>
  );
}

export default App;
