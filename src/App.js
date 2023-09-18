import './App.css';
import MenuPizza from './components/MenuPizza';
import IngredientList from './components/IngredientList';
import HeaderApp from './components/HeaderApp';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    // <div className="App">
      <div className="container">
      <HeaderApp />
      <MenuPizza />
      {/* <IngredientList /> */}
    </div>
    // </div>
  );
}

export default App;
